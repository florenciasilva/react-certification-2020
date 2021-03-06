import firebase from 'firebase';
import { useState } from 'react';
import { useUserContext } from '../provider/index';

export const useLogin = () => {
  const { setUserContext, setErrorContext } = useUserContext();
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        setUser(res.user);
        setUserContext(res.user);
        localStorage.setItem('user', res.user);
      })
      .catch((err) => {
        setError(err.message);
        setErrorContext(err.message);
      });
  };

  return { user, error, login };
};
