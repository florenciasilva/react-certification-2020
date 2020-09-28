import React from 'react';
import SearchBar from '../SearchBar/index';
import { useLogout } from '../../hooks/useLogout';
import { Navbar, LogoutBtn } from './Header.styles';
import UserProfile from '../UserProfile/index';

const Header = () => {
  const { logout } = useLogout();

  return (
    <Navbar>
      <UserProfile />
      <SearchBar />
      <LogoutBtn type="button" onClick={logout}>
        {' '}
        Log out
      </LogoutBtn>
    </Navbar>
  );
};

export default Header;
