import firebase from 'firebase';

export const useLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.user));
      localStorage.setItem('error', '');
    })
    .catch((err) => localStorage.setItem('error', err.message));
};
