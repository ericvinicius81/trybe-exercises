// Parte I

// Exercício 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
};

testingScope(true);


// Exercício 2

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortNumbers = numbers => {
  const sort = numbers.sort((a, b) => a - b);
  return sort;
};

console.log(`Os números  ${sortNumbers(oddsAndEvens)} se encontram ordenados de forma crescente!`);


// Parte II

// Exercício 1

const fatorial = number => {
  let value = 1;

  for (let index = 1; index <= number; index += 1) {
      value = value * index;
  }
  return value;
}

console.log(fatorial(4));

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(3));


// Exercício 2

function longestWord(phrase) {
  const words = phrase.split(' ');
  let longWord = words[0];
  // console.log(longWord);
  for (let index = 1; index < words.length; index += 1) {
    if (words[index].length >= longWord.length) {
      longWord = words[index];
      // console.log(longWord);
    }
  }
  return longWord;
};

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

// Longestword com sort em uma linha.

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


// Exercício 3 está na página index.html e no arquivo script2.js


// Exercício 4

const skills = ['Linux', 'HTML', 'CSS', 'Git', 'JavaScript'];

function nameInGreeting(name) {
  let greeting = `Tryber ${name} aqui!`;
  return greeting;
};

let firstPhrase = nameInGreeting('Eric');

// console.log(firstPhrase);

function addPhrase(text) {
  text = firstPhrase;
  let result = `${text}

    Minhas skills são:`;

    skills.sort();
    skills.forEach((skill) =>
    result = `${result}

    - ${skill}`);

      return result;
};

console.log(addPhrase());
