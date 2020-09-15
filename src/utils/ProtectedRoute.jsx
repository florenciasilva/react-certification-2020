import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ path, component }) => {
  const user = localStorage.getItem('user');
  return user ? <Route path={path} component={component} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
