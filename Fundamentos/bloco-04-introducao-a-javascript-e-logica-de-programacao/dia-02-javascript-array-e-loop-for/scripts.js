let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
};


// Exercício 2

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

console.log(sum);


// Exercício 3


let average = (sum / numbers.length)
console.log(average);


// Exercício 4

if (average > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
};


// Exercício 5

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
};

console.log(higherNumber);


// Exercício 6

let numbersOdd = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numbersOdd.push(numbers[index]);
  }
};

if (numbersOdd.length !== 0) {
  console.log('Existe(m) ' + numbersOdd.length + ' número(s) ímpares');
} else {
  console.log('Nenhum valor ímpar encontrado');
}


// Exercício 7

let smallerNumber = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallerNumber) {
    smallerNumber = numbers[index];
  }
};

console.log(smallerNumber);


// Exercício 8

let numbers1a25 = [];

for (index = 1; index <= 25; index += 1) {
  numbers1a25.push(index)
};

console.log(numbers1a25);


// Exercício 9

let numbers1a25div2 = [];

for (index = 0; index < numbers1a25.length; index += 1) {
  numbers1a25div2.push(numbers1a25[index] /2);
};

console.log(numbers1a25div2);
