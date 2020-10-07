import React from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useUserContext } from '../../provider/UserProvider';

import {
  LoginContainer,
  TitleContainer,
  PrimaryBtn,
  GoogleLogo,
  Peeps,
} from './Login.styles';
import logo from '../../assets/google-icon.png';

const Login = () => {
  const { login } = useLogin();
  const { error } = useUserContext();

  return (
    <LoginContainer>
      <TitleContainer>
        <h1>React Cert</h1>
        <div className="subline" />
        <Peeps />
      </TitleContainer>
      <form>
        <PrimaryBtn type="button" onClick={login}>
          Login with
          <GoogleLogo src={logo} />
        </PrimaryBtn>
        <div className="subline" />
        <p>{error || ''}</p>
      </form>
    </LoginContainer>
  );
};

export default Login;
