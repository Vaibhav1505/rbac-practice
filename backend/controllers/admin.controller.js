const departmentPermissions = require('../config/departmentPermission');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

const createUser = async (req, res, next) => {
  const { name, email, password, role, department } = req.body;

  try {
    if (!name || !email || !password || !role || !department) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User already exists',
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const assignedPermissions = departmentPermissions[department] || [];

    const newUser = await User.create({
      name,
      email,
      password: hash,
      role,
      department,
      permissions: assignedPermissions,
    });

    const userResponse = newUser.toObject();
    delete userResponse.password;

    res.status(201).json({
      success: true,
      message: 'User created!',
      user: userResponse,
    });
  } catch (error) {
    console.log('Error creating user!');
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
};
