import Profile from './Profile';
import User from '../data/user.json';
import Statistics from './Statistic';
import Data from '../data/statistic.json';
import FriendUl from './Friends';
import friends from '../data/friends.json';
const { username, tag, location, avatar, stats } = User;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={Data} />
      <FriendUl friends={friends} />;
    </>
  );
};
