const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

const { getAllPatientsPlans } = require('./controllers/patientsController');

app.get('/all', getAllPatientsPlans);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});