require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDatabase = require('../config/dbConnect');
const User = require('../models/user.model');
const departmentPermissions = require('../config/departmentPermission');

const demoUsers = [
  { name: 'Alice Admin', email: 'admin1@test.com', password: 'password123', role: 'head', department: 'admin' },
  { name: 'Bob Manager', email: 'admin2@test.com', password: 'password123', role: 'manager', department: 'admin' },

  { name: 'Chris Sales', email: 'sales1@test.com', password: 'password123', role: 'manager', department: 'sales' },
  { name: 'Diana Sales', email: 'sales2@test.com', password: 'password123', role: 'employee', department: 'sales' },
  { name: 'Evan Sales', email: 'sales3@test.com', password: 'password123', role: 'assistant', department: 'sales' },

  { name: 'Fiona Marketing', email: 'marketing1@test.com', password: 'password123', role: 'manager', department: 'marketing' },
  { name: 'Gina Marketing', email: 'marketing2@test.com', password: 'password123', role: 'employee', department: 'marketing' },

  { name: 'Henry IT', email: 'it1@test.com', password: 'password123', role: 'manager', department: 'it' },
  { name: 'Ivan IT', email: 'it2@test.com', password: 'password123', role: 'employee', department: 'it' }
];

const seed = async () => {
  await connectDatabase();
  await User.deleteMany({});

  for (const u of demoUsers) {
    const hashedPassword = await bcrypt.hash(u.password, 10);
    const permissions = departmentPermissions[u.department] || [];

    await User.create({ ...u, password: hashedPassword, permissions });
    console.log(`Created: ${u.email} | role: ${u.role} | dept: ${u.department} | permissions: ${permissions}`);
  }

  console.log('\nDone. Password for all users: password123');
  mongoose.connection.close();
};

seed();