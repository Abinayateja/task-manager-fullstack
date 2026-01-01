// Protected route component - checks authentication before allowing access
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Check if user is logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Check if admin access is required
  if (adminOnly && user.role !== 'ADMIN') {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;