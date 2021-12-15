const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Parte II

// Exercício 1

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);

}

customerInfo(order);


// Exercício 2

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`);

}

orderModifier(order);


// Parte III

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

const addShift = (object, key, value) => object[key] = value;

addShift(lesson2, 'turno', 'noite');

console.log(lesson2);

// Exercíco 2

const listKeys = object => Object.keys(object);

console.log(listKeys(lesson1));

// Exercício 3

const sizeObject = object => Object.keys(object).length;

console.log(sizeObject(lesson3));

// Exercício 4

const listValues = object => Object.values(object);

console.log(listValues(lesson2));

// Exercício 5

const allLessons = { };

Object.assign(allLessons, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Exercício 6

const allStudents = object => {
  let studentsTotal = 0;
  const keys = Object.keys(object);
  for (index in keys) {
    studentsTotal += object[keys[index]].numeroEstudantes;
  }
  return studentsTotal;
};

console.log(allStudents(allLessons));


// Exercício 7

const getValuePosition = (object, index) => Object.values(object)[index];

console.log(getValuePosition(lesson1, 0));

// Exercício 8

const verifyPair = (object, key, value) => {
  const pair = Object.entries(object);
  let isEqual = false;
  for (let index in pair) {
    if (pair[index][0] === key && pair[index][1] === value) isEqual = true;
  }
  return isEqual;
};

console.log(verifyPair(lesson2,'professor','Carlos'));
