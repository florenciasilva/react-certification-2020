import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

import {
  LoginContainer,
  TitleContainer,
  LoginForm,
  LoginBtn,
  GoogleLogo,
  Peeps,
} from '../../styles/styles';
import logo from '../../assets/google-icon.png';

const Login = () => {
  const { user, error, login } = useLogin();
  const { push } = useHistory();

  useEffect(() => {
    console.log(user, '<- user useEffect');
    if (user) {
      push('/homepage');
    }
  }, [user]);

  return (
    <LoginContainer>
      <TitleContainer>
        <h1>React Cert</h1>
        <div className="subline" />
        <Peeps />
      </TitleContainer>
      <LoginForm>
        <LoginBtn type="button" onClick={login}>
          Login with
          <GoogleLogo src={logo} />
        </LoginBtn>
        <div className="subline" />
        <p>{error || ''}</p>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
