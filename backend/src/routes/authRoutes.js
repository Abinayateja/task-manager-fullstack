// Authentication routes
const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../utils/validation');
const protect = require('../middleware/authMiddleware');// Public routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);// Protected routes
router.get('/me', protect, getMe);module.exports = router;