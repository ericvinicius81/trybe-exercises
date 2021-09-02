let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ex. 1
console.log('Exercício 1', '\n');

for (let index = 0; index < numbers.length; index +=1) {
  console.log(numbers[index],);
} console.log('\n');

// Ex. 2
console.log('Exercício 2', '\n');

let resultado = 0

for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
} 

console.log(resultado, '\n');

// Ex. 3
console.log('Exercício 3', '\n');

let media = (resultado/numbers.length)
console.log(media, '\n')

// Ex. 4
console.log('Exercício 4', '\n');

if (media > 20) {
  console.log('valor maior que 20');
}
else {
  console.log('valor menor ou igual a 20');
} console.log('\n')

// Ex. 5
console.log('Exercício 5', '\n');

let maiorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
console.log(maiorValor, '\n');

// Ex. 6
console.log('Exercício 6', '\n');

let valorImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    valorImpar += 1;
  }
}

if (valorImpar !== 0) {
  console.log(valorImpar + " números ímpares");
}
else {
  console.log('nenhum valor ímpar encontrado');
} console.log('\n');

// Ex. 7
console.log('Exercício 7', '\n');

let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}
console.log(menorValor, '\n');

// Ex. 8
console.log('Exercício 8', '\n');

let array1a25 = [];

for (let index = 1; index <= 25; index += 1) {
  array1a25.push(index);
}
console.log(array1a25, '\n');

// Ex. 9
console.log('Exercício 9', '\n');

for (let index = 0; index < array1a25.length; index += 1) {
  console.log(array1a25[index] / 2);
}