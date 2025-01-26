// src/controllers/userController.js
exports.createUser = async (req, res) => {
    try {
      const userData = req.body.payload;
  
      // Simulate user creation and return a unique user ID
      const userId = `user_${Date.now()}`;
      console.log('User created:', { userId, ...userData });
  
      // Respond with the created user ID
      res.status(200).json({ id: userId });
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Failed to create the user.' });
    }
  };
  