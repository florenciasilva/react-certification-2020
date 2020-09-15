import React from 'react';
import { useLogin } from '../hooks/useLogin';
import { LoginContainer, TitleContainer, LoginForm, LoginBtn, GoogleLogo, Peeps } from '../styles/styles';
import logo from '../assets/google-icon.png';

const Login = () => {
  const handleLogin = useLogin;
  const loginError = localStorage.getItem('error');

  return (
    <LoginContainer>
      <TitleContainer>
        <h1>React Cert
        </h1>
        <div className="subline" />
        <Peeps></Peeps>
      </TitleContainer>
      <LoginForm>
        <LoginBtn type="button" onClick={handleLogin}>
          Login with
          <GoogleLogo src={logo}/>
        </LoginBtn>
        <div className="subline" />
        <p>{loginError || ''}</p>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
