import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../provider/UserProvider';

const ProtectedRoute = ({ path, component }) => {
  const { userContext } = useUserContext();
  console.log(userContext, '<- protectedroute user context')
  return userContext ? <Route path={path} component={component} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
