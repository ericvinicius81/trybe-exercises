"use strict";
// Exercício 1: Temos um array characters que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo Character e da função usada para imprimir as informações básicas de todos os jogadores.
const characters = [
    {
        nickname: 'xKillerx',
        class: 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
];
function printCharacter(character, index) {
    const { nickname, class: cls, createdAt } = character;
    console.log(`\n\n===== Character: ${index + 1} ========`);
    console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}
characters.forEach(printCharacter);
// Exercício 2: Crie uma enum que represente os meses do ano.
var Months;
(function (Months) {
    Months[Months["Jeneiro"] = 1] = "Jeneiro";
    Months[Months["Fevereiro"] = 2] = "Fevereiro";
    Months[Months["Mar\u00E7o"] = 3] = "Mar\u00E7o";
    Months[Months["Abril"] = 4] = "Abril";
    Months[Months["Maio"] = 5] = "Maio";
    Months[Months["Junho"] = 6] = "Junho";
    Months[Months["Julho"] = 7] = "Julho";
    Months[Months["Agosto"] = 8] = "Agosto";
    Months[Months["Setembro"] = 9] = "Setembro";
    Months[Months["Outubro"] = 10] = "Outubro";
    Months[Months["Novembro"] = 11] = "Novembro";
    Months[Months["Dezembro"] = 12] = "Dezembro";
})(Months || (Months = {}));
;
console.log(`Eu nasci em 14/${Months.Maio}/1979`);
// Exercício 3: Crie uma enum que represente as estações climáticas do ano.
// Exercício 4: Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
// Retorne em que estação aquele mês se encontra.
// Caso seja um mês que possua duas estações retorne ambas.
// Para referência:
// Estações do ano no Hemisfério Norte
// Copiar
//     | Estação   | Início         | Término        |
//     | --------- | -------------- | -------------- |
//     | Outono    | 23 de setembro | 21 de dezembro |
//     | Inverno   | 21 de dezembro | 20 de março    |
//     | Primavera | 20 de março    | 21 de junho    |
//     | Verão     | 21 de junho    | 23 de setembro |
// Estações do ano no Hemisfério Sul
// Copiar
//     | Estação   | Início         | Término        |
//     | --------- | -------------- | -------------- |
//     | Outono    | 20 de março    | 21 de junho    |
//     | Inverno   | 21 de junho    | 22 de setembro |
//     | Primavera | 22 de setembro | 21 de dezembro |
//     | Verão     | 21 de dezembro | 20 de março    |
// Fonte: https://brasilescola.uol.com.br/geografia/estacoes-ano.htm
// Agora vamos criar um pacote Node para converter unidades de medidas no Sistema Internacional:
