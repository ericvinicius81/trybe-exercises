const readline = require('readline-sync');

function sorteio() {

  const numeroSorteado = parseInt(Math.random() * 10);
  const numeroDigitado = readline.questionInt('Digite um número entre 0 e 10: ');

  if (numeroDigitado !== numeroSorteado) {
    return console.log(`Opa, não foi dessa vez. O número era ${numeroSorteado}`);
  }
  return console.log('Parabéns, número correto!');
}

sorteio();