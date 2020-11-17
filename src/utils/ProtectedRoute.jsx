import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../provider/index';

const ProtectedRoute = ({ path, component }) => {
  const { user } = useUserContext();
  return user ? <Route path={path} exact component={component} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
