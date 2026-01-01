import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="navbar">
      <h2>Task Manager</h2>
      <div className="navbar-right">
        <span>Welcome, {user.name}</span>
        {user.role === 'ADMIN' && (
          <button 
            className="btn btn-secondary btn-small"
            onClick={() => navigate('/admin')}
          >
            Admin Panel
          </button>
        )}
        <button 
          className="btn btn-secondary btn-small"
          onClick={() => navigate('/dashboard')}
        >
          My Tasks
        </button>
        <button className="btn btn-danger btn-small" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;