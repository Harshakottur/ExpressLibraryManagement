const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    dueDate: { type: Date, required: true },
    transactionType: { type: String, required: true }
});

module.exports = mongoose.model('Transaction', TransactionSchema);

