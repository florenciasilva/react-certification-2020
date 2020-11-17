import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Views/Login/index';
import Homepage from './Views/Homepage/index';
import VideoPage from './Views/VideoPage/index';
import UserProvider from './provider/index';
import VideoListProvider from './provider/VideoListProvider';
import ProtectedRoute from './utils/ProtectedRoute';
import './firebase';

const App = () => {
  return (
    <UserProvider>
      <VideoListProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <ProtectedRoute path="/homepage" component={Homepage} />
            <ProtectedRoute path="/video:videoId" component={VideoPage} />
          </Switch>
        </BrowserRouter>
      </VideoListProvider>
    </UserProvider>
  );
};

export default App;
