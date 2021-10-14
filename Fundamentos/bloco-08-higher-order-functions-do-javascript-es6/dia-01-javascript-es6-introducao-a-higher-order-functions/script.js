const newData = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return{Nome: name, Email: `${email}@betrybe.com`};
}

const newEmployees = () => {
  const employees = {
    id1: newData('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newData('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newData('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(newData));

//

const numbers = (number, numberAleatory) => number === numberAleatory;

const result = (number, message) => {
  const numberAleatory = Math.floor((Math.random() * 5) + 1);
  if (number === numberAleatory) {
      return 'Parabéns você ganhou';
    } else {
      return 'Tente novamente';
  };
};
