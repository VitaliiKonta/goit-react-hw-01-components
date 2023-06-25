import Profile from './Profile';
import User from '../data/user.json';
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
    </>
  );
};
