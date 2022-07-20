const Book = require('../models/bookModel');

const getAll = async () => {
  const books = await Book.getAll();

  return books;
};

module.exports = {
  getAll
};