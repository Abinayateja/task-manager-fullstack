// User management routes (admin only)
const express = require('express');
const router = express.Router();
const { 
  getAllUsers, 
  getUserById, 
  deleteUser 
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');
const { restrictToAdmin } = require('../middleware/roleMiddleware');

// All routes require authentication and admin role
router.use(protect, restrictToAdmin);

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);

module.exports = router;