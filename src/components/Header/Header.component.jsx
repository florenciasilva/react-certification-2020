import React from 'react';
import SearchBar from '../SearchBar/index';
import { useLogout } from '../../hooks/useLogout';
import { Navbar, LogoutBtn } from './Header.styles'

const Header = () => {
    const { logout } = useLogout();

    return (
            <Navbar>
                <SearchBar />
                <LogoutBtn type="button" onClick={logout}> Log out</LogoutBtn>
            </Navbar>
    );
};

export default Header;