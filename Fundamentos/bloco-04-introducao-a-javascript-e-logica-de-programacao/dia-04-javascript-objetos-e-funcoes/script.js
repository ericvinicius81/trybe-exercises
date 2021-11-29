
// Parte I - Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// // Exercício 1

console.log('Bem vinda, ' + info.personagem);


// // Exercício 2

info['recorrente'] = 'Sim';

console.log(info);


// Exercício 3

for (let index in info) {
  console.log(index);
};


// Exercício 4

for (let index in info) {
  console.log(info[index]);
};


// Exercício 5

console.log(info[index + ' e ' + info2[index]]);

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let index in info) {
  if (index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + info2[index]);
  };
};


// Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};


// Exercício 6

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);


// Exercício 7

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
},);

console.log(leitor);

//  Exercício 8

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livro(s) favorito(s).');