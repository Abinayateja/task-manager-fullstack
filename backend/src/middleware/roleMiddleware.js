// Middleware to check if user has required role (admin access control)

// Restrict access to admin users only
const restrictToAdmin = (req, res, next) => {
  // Check if user exists (should be set by protect middleware)
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Not authenticated'
    });
  }

  // Check if user role is ADMIN
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Admin privileges required.'
    });
  }

  next(); // User is admin, proceed to next middleware or route handler
};

module.exports = { restrictToAdmin };