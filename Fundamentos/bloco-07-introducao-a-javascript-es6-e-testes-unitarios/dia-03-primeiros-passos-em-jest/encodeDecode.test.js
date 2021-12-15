const { encode, decode } = require('./encodeDecode');

describe('Testa a função encode', () => {
  it('Espera que encode seja uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Espera que, na função encode, as vogais a, e, i, o, u serão convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('Espera que, na função encode, as demais letras não serão convertidas', () => {
    expect(encode('bcdfghjklmnpqrstvxywz')).toEqual('bcdfghjklmnpqrstvxywz');
  });

  it('Espera que, na função encode, a string que é retornada tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('teste').length).toEqual(5);
  }); 
});

describe('Testa a função decode', () => {
  it('Espera que decode seja uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('Espera que, na função decode, os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('Espera que, na função decode, os demais números não serão convertidos', () => {
    expect(decode('67890')).toEqual('67890');
  });
  
  it('Espera que, na função decode, a string que é retornada tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('teste').length).toEqual(5);
  });
  
});
