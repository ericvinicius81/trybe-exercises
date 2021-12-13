
const fatorial = number => {
  let value = 1;

  for (let index = 1; index <= number; index += 1) {
      value = value * index;
  }
  return value;
}

console.log(fatorial(4));