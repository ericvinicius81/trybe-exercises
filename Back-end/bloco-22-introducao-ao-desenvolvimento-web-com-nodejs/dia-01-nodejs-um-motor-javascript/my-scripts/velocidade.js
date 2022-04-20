const readline = require('readline-sync')

// const distancia = readline.question('Digite a distância em km: ');
// const tempo = readline.question('Digite o tempo em hora(s): ')

// function velocidade() {
//   console.log(`A velocidade é ${distancia / tempo} km/h`);
// }

const distancia = readline.question('Digite a distância em metros: ');
const tempo = readline.question('Digite o tempo em segundos: ')

function velocidade() {
  console.log(`A velocidade é ${distancia / tempo} m/s`);
}

velocidade();