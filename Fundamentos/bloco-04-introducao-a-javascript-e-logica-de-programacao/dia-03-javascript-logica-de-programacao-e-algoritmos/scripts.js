// Exercício 1

let n = 5;
let symbol = '*';
let row = '';

for (let index = 0; index <= n; index +=1) {
  row += symbol;
};

for (let index = 0; index <= n; index += 1) {
  console.log(row);
};


// Exercício 2

let base = 5;
let symbol = '*';
let row = '';

for (let index = 0; index <= base; index += 1) {
  row += symbol;
  console.log(row);
};


// Exercício 3

let base = 5;
let symbol = '*';
let row = '';
let position = base;

for (let indexLine = 0; indexLine <= base; indexLine += 1) {
  for (index = 0; index <= base; index += 1) {
    if (index < position) {
      row += ' ';
    } else {
      row += symbol;
    }
  }
  console.log(row);
  row = '';
  position -= 1;
};
