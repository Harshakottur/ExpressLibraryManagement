const express = require('express');
const { addBook, getBooks, updateBookStatus, deleteBook} = require('../controllers/bookController');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');

router.use(authenticateToken);
router.post('/', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, addBook);
router.get('/', getBooks);
router.put('/:id', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, updateBookStatus);
router.delete('/:id', (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
}, deleteBook);
module.exports = router;
