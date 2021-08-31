// Exercício 1
const a = 2;
const b = 2;

console.log(a + " + " + b + " é: " + (a + b));
console.log(a + " - " + b + " é: " + (a - b));
console.log(a + " x " + b + " é: " + (a * b));
console.log(a + " / " + b + " é: " + (a / b));
console.log(a + " % " + b + " é: " + (a % b));

// Exercício 2

if (a > b) {
  console.log(a + " > " + b);
}
else if (a < b) {
  console.log(b + " > " + a);
}
else {
  console.log(a + " = " + b);
}

// Exercício 3

const c = 3;
const d = 11;
const e = 15;

if (c > d && c > e) {
  console.log(c + " é o maior número");
}
else if (d > c && d > e) {
  console.log(d + " é o maior número");
}
else {
  console.log(e + " é o maior número");
}
 // Exercício 4

 const number = 5;

 if (number > 0) {
   console.log("positive");
 }
 else if (number < 0) {
   console.log("negative");
 }
 else {
   console.log("zero");
 }