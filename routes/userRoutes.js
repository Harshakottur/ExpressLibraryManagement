const express = require('express');
const { createUser, listUsers } = require('../controllers/userController');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');

router.use(authenticateToken);
router.post('/', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, createUser);
router.get('/', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, listUsers);
module.exports = router;
