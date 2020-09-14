import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Views/Login';
import Homepage from './Views/Homepage';
import VideoPage from './Views/VideoPage';
import Favorites from './Views/Favorites';

import './firebase';

const App = () => {
  const user = localStorage.getItem('user');
  return (
    <BrowserRouter>
        <Route path="/" exact>
          {user ? <Homepage /> : <Login />}
        </Route>
        <Route path="/video:videoId">
          {user ? <VideoPage /> : <Login />}
        </Route>
        <Route path="/favorites">
          {user ? <Favorites /> : <Login />}
        </Route>
    </BrowserRouter>
  );
};

export default App;
