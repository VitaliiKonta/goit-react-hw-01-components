import PropTypes from 'prop-types';

import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatName,
  StatPercent,
} from './Statistic.styled';

function Statistics({ stats, title }) {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(statsElem => (
          <StatItem
            key={statsElem.id}
            style={{
              backgroundColor: 'blue',
            }}
          >
            <StatName>{statsElem.label}</StatName>
            <StatPercent>{statsElem.percentage}%</StatPercent>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
export default Statistics;
