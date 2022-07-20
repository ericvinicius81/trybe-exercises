// Exercício 4

const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf8')
  .then((file) => {
    return JSON.parse(file);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });


async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));

    const chosenSimpson = simpsons.find((simpson) => simpson.id === id);
    if (!chosenSimpson) {
      throw new Error('id não encontrado');
    }  
  console.log(chosenSimpson);  
}

getSimpsonById('5');


async function removeSimpsons10e6() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));

  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
  console.log(newArray);
}

removeSimpsons10e6();


async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));

    const simpsonsFamily = simpsons.filter(simpson => (simpson.id >= 1 && simpson.id <= 4));
    console.log(simpsonsFamily);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

createSimpsonsFamily();


async function addNelsoSimpsonsFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((file) => JSON.parse(file));

    simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });
    console.log(simpsonsFamily);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

addNelsoSimpsonsFamily();


function replaceNelson () {
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
    .concat([{ id: '5', name: 'Maggie Simpson' }]))
    .then((simpsonsWithMaggie) => fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

replaceNelson();