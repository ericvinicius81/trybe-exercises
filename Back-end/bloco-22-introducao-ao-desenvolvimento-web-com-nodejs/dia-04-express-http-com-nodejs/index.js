const express = require('express');

const app = express();

const port = 3001;

app.use(express.json());

const message = {message: 'pong'};

app.get('/ping', (req, res) => {
  return res.json(message);
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).json({ message: `Hello, ${name}!` });
});

app.post('/gretting', (req, res)=> {
  const { name, age } = req.body;
  const minAge = 17;
  if (age <= minAge) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
    return res.status(200).json({ message: `Hello, ${name}!` });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
