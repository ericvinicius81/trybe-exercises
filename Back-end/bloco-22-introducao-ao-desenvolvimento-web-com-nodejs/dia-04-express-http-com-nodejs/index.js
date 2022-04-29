const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/ping', (req, res) => {
  return res.json({ message: 'pong' });
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

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
