import React from 'react';
import { removeToken } from './authenticate';

const User = React.createContext();

export const UserProvider = ({ user, children }) => {
  const userId = user && user.id;
  const userObj = React.useMemo(() => user, [userId]);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const userState = loggedIn ? userObj : undefined;

  return <User.Provider value={[userState, setLoggedIn]}>{children}</User.Provider>;
};

export const useGetUser = () => {
  return React.useContext(User)[0];
};

export const useHasUser = () => {
  return Boolean(React.useContext(User)[0]);
};

export const useLogout = () => {
  const setLoggedIn = React.useContext(User)[1];

  // Remove the user from the state and the token from cookies
  return () => {
    setLoggedIn(false);
    removeToken();
  };
};
