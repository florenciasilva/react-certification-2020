import React from 'react';
import SearchBar from '../SearchBar/index';
import { useLogout } from '../../hooks/useLogout';
import { Navbar } from './Header.styles'
import VideoListProvider from '../../provider/VideoListProvider';

const Header = () => {
    const { logout } = useLogout();

    return (
        <VideoListProvider>
            <Navbar>
                <SearchBar />
                <button type="button" onClick={logout}> Log out</button>
            </Navbar>
        </VideoListProvider>
    );
};

export default Header;