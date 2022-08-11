const myRemove = require('./myRemove');

describe('Testa a função myRemove', () => {
  it('Espera que a chamada myRemove([1, 2, 3, 4], 3) retorne o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Espera que a chamada myRemove([1, 2, 3, 4], 3) não retorne o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Espera que a chamada myRemove([1, 2, 3, 4], 5) retorne o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
