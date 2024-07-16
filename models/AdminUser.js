const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const AdminUserSchema = new Schema({
    username: {
        type: String,
        unique: true, 
        required: true
      },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true }
});
AdminUserSchema.pre('save', function(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});
module.exports = mongoose.model('AdminUser', AdminUserSchema);
