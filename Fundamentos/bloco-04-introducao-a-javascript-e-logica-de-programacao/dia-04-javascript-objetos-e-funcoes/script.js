// Parte I - Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// Exercício 1

console.log('Bem vinda, ' + info.personagem);


// Exercício 2

info['recorrente'] = 'Sim';

console.log(info);


// Exercício 3

for (let index in info) {
  console.log(index);
};


// Exercício 4

for (let index in info) {
  console.log(info[index]);
};


// Exercício 5

console.log(info[index + ' e ' + info2[index]]);

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let index in info) {
  if (index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + info2[index]);
  };
};


// Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};


// Exercício 6

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);


// Exercício 7

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
},);

console.log(leitor);

//  Exercício 8

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livro(s) favorito(s).');


// Parte II - Funções


//  Exercício 1

function isPalindromo(word) {
  const newWord = word.split('').reverse().join('');
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindromo('arara'));
console.log(isPalindromo('desenvolvimento'));


// Exercício 2

function returnIndexOfHigherNumber(numbers) {
  let indexOfHigherNumber = 0;
  for (let index in numbers) {
    if (numbers[index] > numbers[indexOfHigherNumber]) {
      indexOfHigherNumber = index;
    }
  }
  return indexOfHigherNumber;
};

console.log(returnIndexOfHigherNumber([2, 3, 6, 7, 10, 1]));


// Exercício 3

function returnIndexOfSmallerNumber(numbers) {
  let indexOfSmallerNumber = 0;
  for (let index in numbers) {
    if (numbers[index] < numbers[indexOfSmallerNumber]) {
      indexOfSmallerNumber = index;
    }
  }
  return indexOfSmallerNumber;
};

console.log(returnIndexOfSmallerNumber([2, 4, 6, 7, 10, 0, -3]));


// Exercício 4

function isMoreCharacters(words) {
  let biggestWord = '';
  for (let index in words) {
    if (words[index].length > biggestWord.length) {
      biggestWord = words[index];
    }
  }
  return biggestWord;
};

console.log(isMoreCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Exercício 5

function returnMoreRepeat(numbers) {
  let counter = 0;
  let counter2 = 0;
  let indexOfNumberMoreRepeat = 0;
  for (let index in numbers) {
    let number1 = numbers[index];
    for (let index2 in numbers) {
      if (number1 === numbers[index2]) {
        counter += 1;
      }
    }
    if (counter > counter2) {
      counter2 = counter;
      indexOfNumberMoreRepeat = index;
    }
    counter = 0;
  }
  return numbers[indexOfNumberMoreRepeat];
};

console.log(returnMoreRepeat([2, 3, 2, 5, 8, 2, 3]));


// Exercício 6

function sum1aN(N) {
  let sum = 0;
  for (let index = 1; index <= N; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(sum1aN(5));


// Exercício 7

function verifyString(word, ending) {
  let invertWord = word.split('').reverse().join('');
  let invertEnding = ending.split('').reverse().join('');
  let result;
  for (let index = 0; index < invertEnding.length; index += 1) {
    if (invertEnding[index] !== invertWord[index]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

console.log(verifyString('trybe', 'be'));
console.log(verifyString('joaofernando', 'fernan'));
