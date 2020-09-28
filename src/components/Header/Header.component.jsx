import React from 'react';
import SearchBar from '../SearchBar/index';
import { useLogout } from '../../hooks/useLogout';
import { Navbar, LogoutBtn } from './Header.styles'
import VideoListProvider from '../../provider/VideoListProvider';

const Header = () => {
    const { logout } = useLogout();

    return (
        <VideoListProvider>
            <Navbar>
                <SearchBar />
                <LogoutBtn type="button" onClick={logout}> Log out</LogoutBtn>
            </Navbar>
        </VideoListProvider>
    );
};

export default Header;