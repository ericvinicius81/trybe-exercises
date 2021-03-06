function exercicio1(num1, num2, num3) {
  const promise = new Promise((res, rej) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'|| typeof num3 !== 'number')
      rej ('Informe apenas números');
    
    const resultado = ((num1 + num2) * num3);

    if (resultado < 50) {
      rej ('Valor muito baixo');
    }

    res(resultado);
      
  });
  return promise;
}

// exercicio1(4, 16, 3)
//  .then(res => console.log(res))
//  .catch(err => console.log(err))


function exercicio2() {
  return Math.floor(Math.random() * 100 + 1);
}

async function cria3numeros() {
  const arrayDe3Numeros = Array.from({ length: 3 }).map(exercicio2);

  try {
    const result = await exercicio1(...arrayDe3Numeros);
    console.log(result);
  } catch (err) {
    console.error(err);    
  }
}

cria3numeros();