const express = require('express');
const bookController = require('./controllers/bookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`O Pai tá ON na PORTA ${PORT}`));
