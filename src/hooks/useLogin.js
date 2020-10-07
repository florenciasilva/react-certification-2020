import firebase from 'firebase';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../provider/index';

export const useLogin = () => {
  const { setUserContext, setErrorContext } = useUserContext();
  const [error, setError] = useState();
  const { push } = useHistory();

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        setUserContext(firebase.auth().currentUser);
      })
      .then(() => push('/homepage'))
      .catch((err) => {
        setError(err.message);
        setErrorContext(err.message);
      });
  };

  return { error, login };
};
