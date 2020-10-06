import firebase from 'firebase';
import { useUserContext } from '../provider/index';

export const useLogout = () => {
  const { setUserContext, setErrorContext } = useUserContext();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUserContext(null);
        localStorage.removeItem('user');
      })
      .catch((err) => setErrorContext(err.message));
  };

  return { logout };
};
