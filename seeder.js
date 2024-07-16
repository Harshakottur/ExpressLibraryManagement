const mongoose = require('mongoose');
const User = require('./models/User');
const AdminUser = require('./models/AdminUser');
const Book = require('./models/Book');
const Transaction = require('./models/Transaction');

// Sample data
const users = [
  { username: 'user1', name: 'User One', email: 'user1@example.com', contactNumber: '1234567890' },
  { username: 'user2', name: 'User Two', email: 'user2@example.com', contactNumber: '9876543210' },
  // Add more users as needed
];

const adminUsers = [
  { username: 'admin1', name: 'Admin One', password: 'admin1pass', email: 'admin1@example.com', contactNumber: '1112223333' },
  // Add more admin users as needed
];

const books = [
  { name: 'Book One', author: 'Author A', status: 'Available' },
  { name: 'Book Two', author: 'Author B', status: 'Borrowed' },
  { name: 'Book Three', author: 'Author C', status: 'Available' },
  { name: 'Book Four', author: 'Author D', status: 'Available' },
  // Add more books as needed
];


// MongoDB connection setup
mongoose.connect('mongodb://0.0.0.0:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  try {
    // Insert users
    await User.insertMany(users);
    console.log('Users seeded successfully.');

    // Insert admin users
    await AdminUser.insertMany(adminUsers);
    console.log('Admin users seeded successfully.');

    // Insert books
    await Book.insertMany(books);
    console.log('Books seeded successfully.');


    // Close MongoDB connection
    mongoose.connection.close();
    console.log('Seeder script completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
});
