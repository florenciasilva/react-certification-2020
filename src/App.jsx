import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Views/Login';
import Homepage from './Views/Homepage';
import VideoPage from './Views/VideoPage';
import Favorites from './Views/Favorites';

import './firebase';


const App = () => {
    const userLoggedIn = localStorage.getItem('user');

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {userLoggedIn ? <Homepage/> : <Login /> }
          </Route>
          <Route path="/video:videoId" exact component={VideoPage} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </BrowserRouter>
  )
}

export default App;