import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import { taskAPI } from '../services/api';
import { showToast } from '../utils/toast';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskAPI.getAll();
      setTasks(response.data.data.tasks);
    } catch (error) {
      showToast('Error fetching tasks', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (formData) => {
    try {
      await taskAPI.create(formData);
      showToast('Task created successfully!', 'success');
      setShowModal(false);
      fetchTasks();
    } catch (error) {
      showToast(error.response?.data?.message || 'Error creating task', 'error');
    }
  };

  const handleUpdateTask = async (formData) => {
    try {
      await taskAPI.update(editingTask.id, formData);
      showToast('Task updated successfully!', 'success');
      setShowModal(false);
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      showToast(error.response?.data?.message || 'Error updating task', 'error');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskAPI.delete(id);
        showToast('Task deleted successfully!', 'success');
        fetchTasks();
      } catch (error) {
        showToast('Error deleting task', 'error');
      }
    }
  };

  const openCreateModal = () => {
    setEditingTask(null);
    setShowModal(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="dashboard">
          <div className="dashboard-header">
            <h2>My Tasks</h2>
            <button className="btn btn-primary" onClick={openCreateModal}>
              Create New Task
            </button>
          </div>

          {tasks.length === 0 ? (
            <div className="empty-state">
              <h3>No tasks yet</h3>
              <p>Create your first task to get started!</p>
            </div>
          ) : (
            <div className="tasks-grid">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={openEditModal}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>
            <TaskForm
              task={editingTask}
              onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
              onCancel={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;