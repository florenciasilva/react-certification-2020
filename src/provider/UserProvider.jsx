import React, { createContext, useContext, useState } from 'react';
import firebase from 'firebase';

const LoginContext = createContext(null);

const useUserContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error(`Can't use "useUserContext" without an AuthProvider!`);
  }
  return context;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(firebase.auth().currentUser);
  const [error, setError] = useState();

  return (
    <LoginContext.Provider value={{ user, error, setUser, setError }}>
      {children}
    </LoginContext.Provider>
  );
};

export { useUserContext };
export default UserProvider;
