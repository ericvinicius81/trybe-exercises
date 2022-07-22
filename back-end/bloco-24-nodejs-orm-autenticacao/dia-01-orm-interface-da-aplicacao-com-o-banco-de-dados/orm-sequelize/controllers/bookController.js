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

const create = async (req, res) => {
  const { title, author, pageQuantity } = req. body;

  const newBook = await bookService.create({ title, author, pageQuantity });

  res.status(201).json(newBook);
};

const update = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;

  const book = await bookService.update(id, { title, author, pageQuantity });

  if (!book) return res.status(404).json({ message: 'Book not found' });
  
  return res.status(200).json({ message: 'Book updated' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};