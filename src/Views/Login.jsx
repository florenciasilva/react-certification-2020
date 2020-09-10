import React, { useState } from 'react';
import firebase from 'firebase';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        // const token = res.credential.accessToken;
        localStorage.setItem('user', JSON.stringify(res.user));
      })
      .catch((err) => setLoginError(err.message));
  };

  return (
    <form>
      <button type="submit" onClick={handleLogin}>
        Login with Gmail
      </button>
      {loginError}
    </form>
  );
};

export default Login;
