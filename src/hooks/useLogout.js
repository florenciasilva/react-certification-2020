import firebase from 'firebase';
import { useUserContext } from '../provider/index';

export const useLogout = () => {
  const { setUser, setError } = useUserContext();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((err) => setError(err.message));
  };

  return { logout };
};
