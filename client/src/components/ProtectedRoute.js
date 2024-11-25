import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

// A component to protect routes based on the user's roles
const ProtectedRoute = ({ allowedRoles }) => {
  const currentUser = getCurrentUser();  // Get the currently logged-in user
  console.log(currentUser);

  // Check if currentUser and currentUser.roles are defined and if the user has an allowed role
  if (currentUser && currentUser.roles && allowedRoles.includes(currentUser.roles[0])) {
    return <Outlet />;  // This will render child components
  }

  // Otherwise, redirect to the login page
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
