const User = require('../models/User');
const Role = require('../models/Role');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
     // Validate if roles were provided
     if (!roles || roles.length === 0) {
      return res.status(400).json({ message: 'Please select a role.' });
    }
    const user = new User({ username, email, password });
    const assignedRoles = await Role.find({ name: { $in: roles } });
     // If no roles are found, return an error
     if (assignedRoles.length === 0) {
      return res.status(400).json({ message: 'Invalid role(s) selected.' });
    }
    user.roles = assignedRoles.map(role => role._id);
    
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate('roles');
    if (!user) return res.status(400).json({ message: 'User not found' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ userId: user._id, roles: user.roles.map(role => role.name) }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Logout
exports.logout = (req, res) => {
  res.json({ message: 'Logout successful' });
};