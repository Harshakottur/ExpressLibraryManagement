const LibraryTransaction = require('../models/Transaction');
const Book = require('../models/Book');

exports.createTransaction = async (req, res) => {
  try {
    const { user, book, dueDate, transactionType } = req.body;
    
    // Create new transaction
    const transaction = new LibraryTransaction({ user, book, dueDate, transactionType });
    await transaction.save();

    // Update book status
    const newStatus = transactionType === 'borrowed' ? 'borrowed' : 'available';
    await Book.findByIdAndUpdate(book, { status: newStatus });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listTransactions = async (req, res) => {
  try {
    const { userId } = req.params; // Assuming you'll pass userId as a route parameter
    
    let query = {};
    if (userId) {
      query.user = userId;
    }

    const transactions = await LibraryTransaction.find(query)
      .populate('user', 'name')
      .populate('book', 'name author');
    
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
