import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Views/Login/index';
import Homepage from './Views/Homepage/index';
import VideoPage from './Views/VideoPage/index';
import Favorites from './Views/Favorites/index';
import UserProvider from './provider/index';
import VideoListProvider from './provider/VideoListProvider';
import ProtectedRoute from './utils/ProtectedRoute';
import './firebase';

const App = () => {
  const getFavorites = localStorage.getItem('favorites');
  if (!getFavorites) {
    localStorage.setItem('favorites', []);
  }

  return (
    <UserProvider>
      <VideoListProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <ProtectedRoute path="/homepage" component={Homepage} />
            <ProtectedRoute path="/video:videoId" component={VideoPage} />
            <ProtectedRoute path="/favorites" component={Favorites} />
          </Switch>
        </BrowserRouter>
      </VideoListProvider>
    </UserProvider>
  );
};

export default App;
