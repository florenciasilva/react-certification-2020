import styled from 'styled-components';
import peeps from '../../assets/peeps.svg';

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
  height: 100vh;
  width: 100%;
  font-family: 'Nunito';
`;

export const Peeps = styled.span`
  background: url(${peeps}) no-repeat;
  width: 1000px;
  height: 600px;
  display: inline-block;
`;

export const TitleContainer = styled.div`
  text-align: center;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PrimaryBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5em;
  color: #2b2a2a;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.6em;
  text-transform: lowercase;
  font-family: 'Nunito';

  :hover {
    font-weight: 600;
  }

  :active {
    color: #b68aea;
  }
`;

export const GoogleLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;
