import React from 'react';

const UserTable = ({ users, onViewTasks, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user._count?.tasks || 0}</td>
            <td>
              <button 
                className="btn btn-primary btn-small" 
                onClick={() => onViewTasks(user.id)}
                style={{ marginRight: '10px' }}
              >
                View Tasks
              </button>
              <button 
                className="btn btn-danger btn-small" 
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;