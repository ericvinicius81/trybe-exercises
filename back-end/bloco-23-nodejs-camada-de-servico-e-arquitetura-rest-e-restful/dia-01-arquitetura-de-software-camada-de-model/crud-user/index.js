const express = require('express')
const bodyParser = require('body-parser');

const userModel = require('./models/userModel');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const validData = await userModel.isValid(first_name, last_name, email,password);
  const newUser = await userModel.createUser(first_name, last_name, email, password);
  res.status(201).json(newUser);
});

app.get('/user', async (req,res) => {
  const users = await userModel.getAll();
  res.status(200).json(users);
});

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))