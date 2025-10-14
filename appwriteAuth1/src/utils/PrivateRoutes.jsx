import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Login';

const PrivateRoutes = () => {
  
  const user = true;

  return user ? <Outlet/> : <Login/>
}

export default PrivateRoutes
