// 2. Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.

// const fetchCoins = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());

//   console.log(coins);
// }

// fetchCoins();

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

    return coins;
};

const showCoins = async () => {
  const coins = await fetchCoins();

  const coinList = document.querySelector('#coins');

  coins.filter((coin) => Number(coin.rank) <= 10).map((coin) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${coin.name} (${coin.symbol}): USD ${coin.priceUsd}`;
    coinList.appendChild(newLi);

  });
};


window.onload = () => showCoins();
