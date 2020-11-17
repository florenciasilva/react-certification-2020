import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../provider/index';

export const useLogin = () => {
  const { setUser, setError } = useUserContext();
  const { push } = useHistory();

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        setUser(firebase.auth().currentUser);
      })
      .then(() => {
        push('/homepage');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { login };
};
