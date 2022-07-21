const bookService = require('../services/bookService');

const getAll = async (req, res) => {
  const books = await bookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const book = await bookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

module.exports = {
  getAll,
  getById,
};