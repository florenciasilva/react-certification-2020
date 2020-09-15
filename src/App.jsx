import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Views/Login/index';
import Homepage from './Views/Homepage/index';
import VideoPage from './Views/VideoPage/index';
import Favorites from './Views/Favorites/index';

import './firebase';

const App = () => {
  // context para proteger rutas con user
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/video:videoId" component={VideoPage} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
