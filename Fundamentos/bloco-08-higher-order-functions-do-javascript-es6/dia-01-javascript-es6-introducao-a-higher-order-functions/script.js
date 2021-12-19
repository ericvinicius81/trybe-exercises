// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newData = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return `${name}, ${email}@betrybe.com`;
}

const newEmployees = () => {
  const employees = {
    id1: newData('Pedro Guerra'),
    id2: newData('Luiza Drumond'),
    id3: newData('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(newData));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const lotteryResult = (number, callback) => {
  const numberAleatory = Math.floor((Math.random() * 5) + 1);
  return callback(number, numberAleatory) ? 'Parabéns você ganhou!' : 'Tente novamente';
};

const numberChecker = (number, numberAleatory) => number === numberAleatory;

console.log(lotteryResult(2, numberChecker));


// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
// Copiar

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultPoints = (template, answers, callback) => {
  let total = 0;
  for (let index = 0; index < template.length; index += 1) {
    const points = callback(template[index], answers[index]);
    total += points;
  }
  return `Resultado final: ${total} corretas`; 
};

const checkAnswers = (template, answer) => {
  if (template === answer) {
    return 1;
  } if (answer === 'N.A') {
    return 0;
  }
  return -0.5;
};

console.log(resultPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
