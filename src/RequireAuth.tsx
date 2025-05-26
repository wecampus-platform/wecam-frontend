import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { RootState } from './store/index';
import React from 'react';

const RequireAuth = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
};

export default RequireAuth;

