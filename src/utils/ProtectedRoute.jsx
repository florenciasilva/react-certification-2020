import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../provider/index';

const ProtectedRoute = ({ path, component }) => {
  const { userContext } = useUserContext();
  const localStorageUser = localStorage.getItem('user');
  return userContext || localStorageUser ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
