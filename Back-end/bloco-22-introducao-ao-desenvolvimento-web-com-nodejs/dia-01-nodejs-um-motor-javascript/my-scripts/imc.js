const readline = require('readline-sync')

const peso = readline.questionFloat('Qual o seu peso? (em kg) ');
const altura = readline.question('Qual a sua altura? (em metros, ex: 1.75) ');

function imc() {
  console.log(`Seu IMC é ${(peso / (altura * altura)).toFixed(2)}`);
}

imc();

console.log(`Confira a tabela:

| IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  |
`);