// src/middlewares/authMiddleware.js
module.exports = (req, res, next) => {
    // Simulate authentication
    const token = req.headers['authorization'];
    if (token === 'Bearer valid-token') {
      next();
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  