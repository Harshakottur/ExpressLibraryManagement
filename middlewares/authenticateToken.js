const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401); 
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user; 
        
        // if (user.isAdmin) {
        //     return res.status(200).json({ message: 'authorised' });
        // }
        next();
    });
};

module.exports = authenticateToken;
