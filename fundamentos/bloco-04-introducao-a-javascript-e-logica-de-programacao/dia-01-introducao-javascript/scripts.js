// Erxercício 1

const a = 10;
const b = 5;

const sum = (a + b);
const sub = (a - b);
const mult = (a * b);
const div = (a / b);
const mod = (a % b);

console.log(sum, sub, mult, div, mod);


// Exercício 2

const x = 12;
const y = 9;

if (x > y) {
  console.log(x + " é maior que " + y);
} else if (x < y) {
  console.log(y + " é maior que " + x) ;
};


// Exercício 3

const c = 3;
const d = 7;
const e = 10;

if (c > d && c > e) {
  console.log(c + " é maior que " + d + " e " + e);
} else if (d > c && d > e) {
  console.log(d + " é maior que " + c + " e " + e);
} else if (e > c && e > d) {
  console.log(e + " é maior que " + c + " e " + d);
};


// Exercício 4

const number = 0;

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}


// Exercício 5

const f = 90;
const g = 30;
const h = 60;

if (f < 1 || f >= 180 || g < 1 || g >= 180 || h < 1 || h >= 180) {
  console.log("erro, um ou mais ângulos é inválido");
} else if (f + g + h === 180) {
  console.log(true);
} else if (f + g + h !== 180) {
  console.log(false);
}


// Exercício 6

const chessPiece = "BISPO";

if (chessPiece.toLowerCase() === "rei") {
  console.log("O Rei movimenta-se apenas 1 casa em qualquer direção. O Rei nunca pode se movimentar para uma casa que esteja sob ataque ou capturar uma peça que esteja defendida por uma peça adversária");
} else if (chessPiece.toLowerCase() === "rainha") {
  console.log("A Rainha pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça");
} else if (chessPiece.toLowerCase() === "bispo") {
  console.log("O Bispo se movimenta na diagonal mantendo-se sempre nas casas de mesma cor que se encontrava no início do jogo, podendo ir para frente e para trás, quantas casas quiser, mas não pode pular nenhuma outra peça.");
} else if (chessPiece.toLowerCase() === "torre") {
  console.log("A Torre se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça");
} else if (chessPiece.toLowerCase() === "cavalo") {
  console.log("O Cavalo tem um movimento especial que parece a letra L. O cavalo se movimenta 2 casas para frente ou para trás e em seguida 1 casa para a direita ou para a esquerda, ou 2 casas para a direita ou para a esquerda e em seguida 1 casa para frente ou para trás. O cavalo é a única peça do xadrez que pode pular outras peças");
} else if (chessPiece.toLowerCase() === "peão") {
  console.log("O Peão só se movimenta para frente, sendo a única peça que não se move para trás. No primeiro lance de cada peão ele pode avançar 1 ou 2 casas. À partir do segundo lance de cada peão ele irá movimenta-se apenas 1 casa");
} else {
  console.log("Erro. Não é uma peça válida");
}


// Exercício 7

const grade = 85;

if (grade < 0 || grade > 100) {
  console.log("ERRO");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else if (grade < 50) {
  console.log("F");
}


// Exercício 8

const number1 = 15;
const number2 = 37;
const number3 = 22;

let isEven;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

console.log(isEven);


// Exercício 9

const number4 = 14;
const number5 = 36;
const number6 = 22;

let isOdd = false;

if (number4 % 2 !== 0 || number5 % 2 !== 0 || number6 % 2 !== 0) {
  isOdd = true;
}

console.log(isOdd);


// Exercício 10

const cost = -100;
const totalCost = cost * 1.20;
const salePrice = 200;
const profit = salePrice - totalCost;
const quantity = 1000;

if (cost < 0 || salePrice < 0) {
  console.log("Erro");
} else {
  console.log("O lucro na venda de 1000 unidades do produto é de " + (profit * quantity));
}


// Exercício 11

const salary = 2500.00;
let salaryINSS;
let netSalary;

const inss8 = (0.08 * salary);
const inss9 = (0.09 * salary);
const inss11 = (0.11 * salary);
const inssMax = (570.88);

if (salary <= 1556.94) {
  salaryINSS = salary - inss8;
} else if (salary > 1556.94 && salary <= 2594.92) {
  salaryINSS = salary - inss9;
} else if (salary > 2594.92 && salary <= 5186.82) {
  salaryINSS = salary - inss11;
} else if (salary > 5186.82) {
  salaryINSS = salary - inssMax;
}

// console.log(salaryINSS);

const irIsento = 0;
const ir7 = (0.0750 * salaryINSS) - 142.80;
const ir15 = (0.150 * salaryINSS) - 354.80;
const ir22 = (0.225 * salaryINSS) - 636.13;
const ir27 = (0.275 * salaryINSS) - 869.36;

if (salaryINSS <= 1903.98) {
  netSalary = salaryINSS;
} else if (salaryINSS > 1903.98 && salaryINSS <= 2826.65) {
  netSalary = salaryINSS - ir7;
} else if (salaryINSS > 2826.65 && salaryINSS <= 3751.05) {
  netSalary = salaryINSS - ir15;
} else if (salaryINSS > 3751.05 && salaryINSS <= 4664.68) {
  netSalary = salaryINSS - ir22;
} else if (salaryINSS > 4664.68) {
  netSalary = salaryINSS - ir27;
}

console.log("o valor líquido a ser recebido é R$" + netSalary);
