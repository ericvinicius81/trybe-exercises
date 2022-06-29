// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo

function sum(...values) {
  return values.reduce((acc, cur) => acc + cur);
};

console.log(sum(3, 6, 4));