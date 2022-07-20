const express = require('express');
const app = express();

const validateProductName = require('./middlewares/validateProductName');
const validateInfo = require('./middlewares/validateInfo');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarranty = require('./middlewares/validateWarranty');

app.use(express.json());

app.post('/sales', 
  validateProductName, 
  validateInfo, 
  validateSaleDate, 
  validateWarranty, 
  (req, res) => {
    res.status(201).json({ message: 'Sale created successfully!' });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});