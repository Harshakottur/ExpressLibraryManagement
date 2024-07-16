const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const AdminUser = require('../models/AdminUser');

// POST /api/login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const adminUser = await AdminUser.findOne({ username });

        if (!adminUser) {
            return res.status(401).json({ message: 'Admin user not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, adminUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: adminUser._id, isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, isAdmin: true });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get('/login/direct', async (req, res) => {
    const { username } = req.query;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        const token = jwt.sign({ userId: user._id, isAdmin: false }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, isAdmin: false });
    } catch (error) {
        console.error('Error during direct login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
