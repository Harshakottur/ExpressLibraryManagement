const express = require('express');
const { createAdminUser, listAdminUsers } = require('../controllers/adminUserController');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');

router.use(authenticateToken);
router.get('/', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, listAdminUsers);
router.post('/', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, createAdminUser);

module.exports = router;
