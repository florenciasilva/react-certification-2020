import firebase from 'firebase';
import { useState } from 'react';

export const useLogin = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  // setear contexto, mandar user, err, useState de ambos

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        // localStorage.setItem('user', JSON.stringify(res.user));
        setUser(res.user);
      })
      .catch((err) => setError(err.message));
  };

  return { user, error, login };
};
