import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    handle: '@johndoe',
    image: 'https://i.pravatar.cc/150?u=john',
    bio: 'Frontend Developer | React Enthusiast | Building awesome web apps.',
    location: 'San Francisco, CA',
    website: 'github.com/johndoe',
    joined: 'Joined March 2020',
    following: 245,
    followers: 1205
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
