import React from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const handleLogin = useLogin;
  const loginError = localStorage.getItem('error');

  return (
    <form>
      <button type="button" onClick={handleLogin}>
        Login with Gmail
      </button>
      <p>{loginError ? loginError : ''}</p>
    </form>
  );
};

export default Login;
