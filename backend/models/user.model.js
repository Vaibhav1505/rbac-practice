const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    enum: ['sales', 'marketing', 'it', 'admin'],
  },
  role: {
    type: String,
    required: true,
    enum: ['head', 'manager', 'employee', 'assistant'],
  },
  permissions: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('User', userSchema);
