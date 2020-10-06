import styled from 'styled-components';
import LogoutIMG from '../../assets/logout.png';

export const Navbar = styled.header`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px 0 5px;
  box-sizing: border-box;
`;

export const LogoutBtn = styled.button`
  justify-self: flex-end;
  background-image: url(${LogoutIMG});
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: transparent;
  border: none;
  pointer: cursor;
`;
