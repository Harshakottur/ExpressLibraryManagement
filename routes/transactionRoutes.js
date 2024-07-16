const express = require('express');
const { createTransaction, listTransactions } = require('../controllers/transactionController');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');

router.use(authenticateToken);

// POST /api/transactions - isAdmin must be true
router.post('/', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, createTransaction);

// GET /api/transactions - isAdmin must be true
router.get('/', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, listTransactions);

// GET /api/transactions/:userId - authorized based on req.user.isAdmin
router.get('/:userId', (req, res, next) => {
    if (req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized', meta: req.user.isAdmin
         });
    }
    next();
}, listTransactions);

module.exports = router;
