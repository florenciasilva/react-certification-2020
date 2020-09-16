import firebase from 'firebase';
import { useUserContext } from '../provider/UserProvider';

export const useLogout = () => {
  const { setUserContext, setErrorContext } = useUserContext();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => setUserContext(null))
      .catch((err) => setErrorContext(err.message));
  };

  return { logout };
};
