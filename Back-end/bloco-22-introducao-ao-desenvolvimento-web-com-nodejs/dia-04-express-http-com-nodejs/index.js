const express = require('express');

const app = express();

const port = 3001;

app.use(express.json());

const message = {message: 'pong'};

app.get('/ping', (req, res) => {
  res.json(message);
});


app.post('/hello', function (req, res) {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}!` });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
