// Task routes
const express = require('express');
const router = express.Router();
const {
  createTask,
  getUserTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const { taskValidation } = require('../utils/validation');
const protect = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

router.post('/', taskValidation, createTask);
router.get('/', getUserTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;