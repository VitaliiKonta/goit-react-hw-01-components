import Profile from './Profile';
import User from '../data/user.json';
import Statistics from './Statistic';
import Data from '../data/statistic.json';
import FriendUl from './Friends';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory';
import Transactions from '../data/transactions.json';

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
      {/*=========== ТРОШКИ ВНІС ЗМІН :)==================== */}
      <FriendUl friends={friends} />;
      {/*================== ТРОШКИ ВНІС ЗМІН :)============= */}
      <TransactionHistory items={Transactions} />;
    </>
  );
};
