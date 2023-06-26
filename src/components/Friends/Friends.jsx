import PropTypes from 'prop-types';

import FriendListOneItem from './FriendListOneItem';
import { FriendItems } from './Friends.styled';

const FriendsUl = ({ friends }) => {
  return (
    <FriendItems>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListOneItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendItems>
  );
};

FriendsUl.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendsUl;
