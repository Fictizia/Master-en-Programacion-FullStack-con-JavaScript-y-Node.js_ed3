/* Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If…else, Switch, operador ternario ) */

/* 1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor… o si son iguales. */

//Usando if…else
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(num1, ' is greater than ', num2);
  }
  else if (num1 < num2) {
    console.log(num1, ' is less than ', num2);
  }
  else {
    console.log(num1, ' and ', num2, ' are equals');
  }
}
compareNumbers(3, 4);
compareNumbers(128, 2);
compareNumbers(12, 12);

//Usando Operador Ternario (?:)
function compareNumbers(num1, num2) {
  return num1 > num2 ?
    console.log(num1, ' is greater than ', num2) :
    num1 < num2 ?
    console.log(num1, ' is less than ', num2) :
    console.log(num1, ' and ', num2, ' are equals');
}

compareNumbers(3, 4);
compareNumbers(128, 2);
compareNumbers(12, 12);

//Usando Switch
function compareNumbers(num1, num2) {
  switch (true) {
  case num1 < num2:
    console.log(num1, ' is less than ', num2);
    break;
  case num1 > num2:
    console.log(num1, ' is greater than ', num2);
    break;
  case num1 === num2:
    console.log(num1, ' and ', num2, ' are equals');
    break;
  default:
    'Are you sure it is a number?';
  }
}

compareNumbers(3, 4);
compareNumbers(128, 12);
compareNumbers(12, 12);

/* 2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor. */

//Usando if…else
function greaterNumber(num1, num2, num3) {
  if ((num1 > num2) & (num1 > num3)) {
    console.log(num1, 'is the greater');
  }
  else if ((num2 > num1) & (num2 > num3)) {
    console.log(num2, 'is the greater');
  }
  else {
    console.log(num3, 'is the greater');
  }
}

greaterNumber(1, 2, 3);
greaterNumber(1, 24, 358);
greaterNumber(1, 4, 3);

//Usando Operador Ternario (?:)
function greaterNumber(num1, num2, num3) {
  (num1 > num2) & (num1 > num3) ?
  console.log(num1, 'is the greater'): (num2 > num1) & (num2 > num3) ?
    console.log(num2, 'is the greater') :
    console.log(num3, 'is the greater');
}

greaterNumber(1, 2, 3);
greaterNumber(1, 24, 358);
greaterNumber(1, 4, 3);

//Usando Switch
function greaterNumber(num1, num2, num3) {
  switch (true) {
  case 1:
    (num1 > num2) & (num1 > num3);
    console.log(num1, 'is the greater');
    break;
  case 2:
    (num2 > num1) & (num2 > num3);
    console.log(num2, 'is the greater');
    break;
  default:
    console.log(num3, 'is the greater');
  }
}

greaterNumber(1, 2, 3);
greaterNumber(1, 24, 358);
greaterNumber(1, 4, 3);

/* 3 - Diseña un script que siga el siguiente proceso:
Si el primero es negativo, debe sumar los otros dos
Sino multiplicará los tres numeros
Mostrar el resultado final incluyendo una referencia a la operación realizada. */
//Usando if…else
function operations(num1, num2, num3) {
  if (num1 < 0) {
    let sum = num2 + num3;
    console.log('sum: ', sum);
  }
  else {
    let multiply = num1 * num2 * num3;
    console.log('multiply: ', multiply);
  }
}

operations(1, -2, 3);
operations(-1, 24, 358);
operations(1, 4, -3);

//Usando Operador Ternario (?:)
function operations(num1, num2, num3) {
  num1 < 0 ?
    console.log('sum: ', num2 + num3) :
    console.log('multiply: ', num1 * num2 * num3);
}

operations(1, -2, 3);
operations(-1, 24, 358);
operations(1, 4, -3);

//Usando Switch
function operations(num1, num2, num3) {
  switch (num1 < 0) {
  case true:
    console.log('sum: ', num2 + num3);
    break;
  case false:
    console.log('multiply: ', num1 * num2 * num3);
    break;
  }
}

operations(1, -2, 3);
operations(-1, 24, 358);
operations(1, 4, -3);

/* 4 - Nivel Medio :spades: Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
Se aplica un 25% cuando:
Estamos en los meses de invierno
Y no es viernes o fin de semana. */

//Usando if…else
const price = 4;
let currentMonth = 'December';
let today = 'Wednesday';

function applyDiscount() {
  const discount = 0.25;
  const winterSeason = ['December', 'January', 'February'];
  const weekend = ['Friday', 'Saturday', 'Sunday'];
  const goodMonth = winterSeason.indexOf(currentMonth) !== -1;
  const goodDay = weekend.indexOf(today) === -1;
  let finalPrice = price - price * discount;

  if (goodMonth && goodDay) {
    console.log('Final Price', finalPrice);
  }
  else {
    console.log('Sorry, we cannot apply the discount');
  }
}

applyDiscount(price, currentMonth, today);

//Usando Operador Ternario (?:)
const price = 4;
let currentMonth = 'December';
let today = 'Saturday';

function applyDiscount() {
  const discount = 0.25;
  const winterSeason = ['December', 'January', 'February'];
  const weekend = ['Friday', 'Saturday', 'Sunday'];
  const goodMonth = winterSeason.indexOf(currentMonth) !== -1;
  const goodDay = weekend.indexOf(today) === -1;
  let finalPrice = price - price * discount;

  goodMonth && goodDay ?
    console.log('Final Price', finalPrice) :
    console.log('Sorry, we cannot apply the discount');
}

applyDiscount(price, currentMonth, today);

//Usando Switch
const price = 4;
let currentMonth = 'December';
let today = 'Thursday';

function applyDiscount() {
  const discount = 0.25;
  const winterSeason = ['December', 'January', 'February'];
  const weekend = ['Friday', 'Saturday', 'Sunday'];
  const goodMonth = winterSeason.indexOf(currentMonth) !== -1;
  const goodDay = weekend.indexOf(today) === -1;
  let finalPrice = price - price * discount;

  switch (goodMonth && goodDay) {
  case true:
    console.log('Final Price', finalPrice);
    break;
  default:
    console.log('Sorry, we cannot apply the discount');
  }
}

applyDiscount(price, currentMonth, today);

/* 5 - Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo. */

//Usando if…else
function bePositive(num) {
  if (num > 0) {
    console.log('Cool positive number!');
  }
  else {
    console.log("Don't be so negative");
  }
}

bePositive(3);
bePositive(-4);

//Usando Operador Ternario (?:)
function bePositive(num) {
  num > 0 ?
    console.log('Cool positive number!') :
    console.log("Don't be so negative");
}

bePositive(3);
bePositive(-4);

//Usando Switch
function bePositive(num) {
  switch (num > 0) {
    default: console.log('Cool positive number!');
    break;
  case false:
      console.log("Don't be so negative");
  }
}

bePositive(3);
bePositive(-4);

/* 6 - Diseña un algoritmo que al introducir un número nos diga si es par o impar. */

//Usando if…else
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("You're even");
  }
  else {
    console.log("You're odd");
  }
}

evenOrOdd(2);
evenOrOdd(345);
evenOrOdd(23);

//Usando Operador Ternario (?:)
function evenOrOdd(num) {
  num % 2 === 0 ? console.log("You're even") : console.log("You're odd");
}

evenOrOdd(2);
evenOrOdd(345);
evenOrOdd(23);

//Usando Switch
function evenOrOdd(num) {
  switch (true) {
  case num % 2 === 0:
    console.log("You're even");
    break;
  case num % 2 !== 0:
    console.log("You're odd");
  }
}

evenOrOdd(2);
evenOrOdd(345);
evenOrOdd(23);
