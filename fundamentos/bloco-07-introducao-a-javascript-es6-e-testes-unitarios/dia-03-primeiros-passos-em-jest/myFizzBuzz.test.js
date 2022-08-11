const myFizzBuzz = require('./myFizzBuzz');

describe('Testa a função myFizzBuzz', () => {
  it('Espera que com um número divisível por 3 retorne "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Espera que com um número divisível por 5 retorne "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Espera que com um número divisível por 3 e 5 retorne "fizzbuzz"', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });

  it('Espera que uma chamada com um parâmetro que não é um número retorne false', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});
