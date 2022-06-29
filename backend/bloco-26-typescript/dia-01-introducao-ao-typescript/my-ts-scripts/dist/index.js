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
const data = `14/${Months.Maio}/1979`;
console.log(data);
// Exercício 3: Crie uma enum que represente as estações climáticas do ano.
var Seasons;
(function (Seasons) {
    Seasons["Primavera"] = "\uD83C\uDF3B";
    Seasons["Ver\u00E3o"] = "\uD83C\uDF1E";
    Seasons["Outono"] = "\uD83C\uDF42";
    Seasons["Inverno"] = "\uD83E\uDD76";
})(Seasons || (Seasons = {}));
;
const inverno = Seasons.Inverno;
console.log(`Estamos no inverno ${inverno}`);
