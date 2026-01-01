import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserTable from '../components/UserTable';
import { userAPI } from '../services/api';
import { showToast } from '../utils/toast';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userTasks, setUserTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTasksModal, setShowTasksModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userAPI.getAll();
      setUsers(response.data.data.users);
    } catch (error) {
      showToast('Error fetching users', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleViewTasks = async (userId) => {
    try {
      const response = await userAPI.getById(userId);
      setSelectedUser(response.data.data.user);
      setUserTasks(response.data.data.user.tasks);
      setShowTasksModal(true);
    } catch (error) {
      showToast('Error fetching user tasks', 'error');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await userAPI.delete(userId);
        showToast('User deleted successfully!', 'success');
        fetchUsers();
      } catch (error) {
        showToast(error.response?.data?.message || 'Error deleting user', 'error');
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="dashboard">
          <h2>User Management</h2>
          <UserTable
            users={users}
            onViewTasks={handleViewTasks}
            onDelete={handleDeleteUser}
          />
        </div>
      </div>

      {showTasksModal && (
        <div className="modal-overlay" onClick={() => setShowTasksModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedUser?.name}'s Tasks</h2>
            {userTasks.length === 0 ? (
              <p>No tasks found for this user.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {userTasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.title}</td>
                      <td>{task.status}</td>
                      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <button 
              className="btn btn-secondary" 
              onClick={() => setShowTasksModal(false)}
              style={{ marginTop: '20px' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;