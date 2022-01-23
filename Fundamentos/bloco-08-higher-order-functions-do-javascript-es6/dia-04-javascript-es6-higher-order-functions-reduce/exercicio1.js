// Agora a prática
// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const onlyArray = arrays.reduce((acc, curr) => {
  return acc + curr;
}, []);

console.log(onlyArray);


function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());