const express = require('express');
const app = express();
const port = 3001;
const fs = require('fs').promises;
const authMiddleware = require('./authMiddleware');

app.use(express.json());
app.use(authMiddleware);

// Exercício 1

app.get('/ping', (req, res) => {
  return res.json({ message: 'pong' });
});

// Exercício 2

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).json({ message: `Hello, ${name}!` });
});

// Exercício 3

app.post('/gretting', (req, res)=> {
  const { name, age } = req.body;
  const minAge = 17;
  if (age <= minAge) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
    return res.status(200).json({ message: `Hello, ${name}!` });
})

// Exercício 4

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

// Exercício 5/6

// function getSimpsons () {
//   return fs.readFile('./simpsons.json', 'utf-8')
//     .then(fileContent => JSON.parse(fileContent));
// }

// app.get('/simpsons', async (req, res) => {
//   try {
//     const simpsons = await getSimpsons();

//     return res.status(200).json(simpsons);
//   } catch (error) {
//     return res.status(500).end();
//   }
// })

app.get('/simpsons', async (req, res) => {
  const data = await fs.readFile('./simpsons.json', 'utf-8').then(file => JSON.parse(file));
  return res.status(200).json(data);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile('./simpsons.json', 'utf-8').then(file => JSON.parse(file));
  const dataFound = data.find((d) => d.id === id);

  if (!dataFound) return res.status(404).json({ message: 'simpson not found'});
  return res.status(200).json(dataFound);
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const data = await fs.readFile('./simpsons.json', 'utf-8').then(file => JSON.parse(file));
  const dataFound = data.find((d) => d.id === id);

  if (dataFound) return res.status(409).json({ message: 'id already exists'});
  data.push({ id, name });
  await fs.writeFile('./simpsons.json', JSON.stringify(data));
  return res.status(204).end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
