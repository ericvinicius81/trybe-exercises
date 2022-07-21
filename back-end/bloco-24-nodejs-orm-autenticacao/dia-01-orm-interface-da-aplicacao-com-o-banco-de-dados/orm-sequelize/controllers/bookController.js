const Book = require('../services/bookService');

const getAll = async () => {
  const books = await Book.getAll();

  return books;
};

module.exports = {
  getAll
};