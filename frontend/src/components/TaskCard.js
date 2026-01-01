import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const getStatusClass = (status) => {
    return `task-status status-${status.toLowerCase()}`;
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description || 'No description'}</p>
      <span className={getStatusClass(task.status)}>
        {task.status.replace('_', ' ')}
      </span>
      <div className="task-actions">
        <button className="btn btn-primary btn-small" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="btn btn-danger btn-small" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;