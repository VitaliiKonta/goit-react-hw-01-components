import styled from '@emotion/styled';

export const StatSection = styled.section`
  /* width: 250px; */
  display: flex;
  align-items: center;
  align-content: center;

  flex-direction: column;
  width: 400px;

  margin: 0px auto;
  margin-bottom: 100px;
  border-radius: 2px;
  background-color: #fff;
  color: #d80808;
`;

export const StatTitle = styled.h2`
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  /* flex-direction: row; */
  justify-content: space-between;
  text-align: center;
  list-style: none;
  margin: 0;
  padding-bottom: 16px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: calc(100% / 5);
  padding: 15px;
  border-radius: 1px;
`;
export const StatName = styled.span`
  color: white;
  font-size: 13px;
`;
export const StatPercent = styled.span`
  color: white;
  font-size: 16px;
`;
