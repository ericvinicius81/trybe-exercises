const sum = require('./sum');

describe('Testa a função soma', () => {
  it('Espera que a soma de 4 + 5 seja igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('Espera que a soma de 0 + 0 seja igual a 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  it('Espera um erro quando os parâmetros são um número e uma string', () => {
    expect(() => { sum() }).toThrow();
  });

  it('Espera a mensagem de erro "parameters must be numbers" quando os parâmetros são um número e uma string', () => {
    expect(() => { sum() }).toThrowError(new Error('parameters must be numbers'));
  });
});


// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")