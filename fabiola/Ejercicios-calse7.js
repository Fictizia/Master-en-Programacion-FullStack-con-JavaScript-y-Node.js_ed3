/*Realiza los siguientes ejercicios usando en cada uno los tres tipos de bucles (Do...While, For, While )

1 - Nivel Medio ♠️ Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
  Características:
    La palabra clave es "Fictizia mola mucho"
    Solo existen tres intentos
    Si se pasan los tres intentos. Se despliega un mensaje informativo.*/

//Usando for
function registration(password) {
  let validAttempts = 3;
  let validPassword = password === 'Fictizia mola mucho';
  console.log('Enter the password, you have ' + validAttempts + ' attempts');

  if (validPassword) {
    console.log('Welcome to Fictizia!');
  }
  else {
    for (let i = validAttempts; i > 0; i--) {
      validAttempts -= 1;
      console.log(validAttempts, validAttempts > 1);
      if (validAttempts > 1) {
        console.log(
          'That is not the password. Try again, you have ' +
          validAttempts +
          ' attempts left'
        );
      }
      else if (validAttempts === 1) {
        console.log(
          'That is not the password. Try again, you have ' +
          validAttempts +
          ' attempt left'
        );
      }
      else {
        console.log('Sorry, not access granted');
      }
    }
  }
}

registration('Fictizia mola mucho');
registration('patatas');

//Usando while y break
function registration(password) {
  let validAttempts = 3;
  let validPassword = password === 'Fictizia mola mucho';
  console.log('Enter the password, you have ' + validAttempts + ' attempts');

  if (validPassword) {
    console.log('Welcome to Fictizia!');
  }
  else {
    while (validAttempts > 0) {
      validAttempts -= 1;

      if (validAttempts > 1) {
        console.log(
          'That is not the password. Try again, you have ' +
          validAttempts +
          ' attempts left'
        );
      }
      else if (validAttempts === 1) {
        console.log(
          'That is not the password. Try again, you have ' +
          validAttempts +
          ' attempt left'
        );
      }
      else {
        console.log('Sorry, not access granted');
      }
    }
  }
}

registration('Fictizia mola mucho');
registration('patatas');

//Usando Do...While
function registration(password) {
  let validAttempts = 3;
  let validPassword = password === 'Fictizia mola mucho';
  console.log('Enter the password, you have ' + validAttempts + ' attempts');

  if (validPassword) {
    console.log('Welcome to Fictizia!');
  }
  else {
    do {
      validAttempts -= 1;

      if (validAttempts > 1) {
        console.log(
          'That is not the password. Try again, you have ' +
          validAttempts +
          ' attempts left'
        );
      }
      else if (validAttempts === 1) {
        console.log(
          'That is not the password. Try again, you have ' +
          validAttempts +
          ' attempt left'
        );
      }
      else {
        console.log('Sorry, not access granted');
      }
    } while (validAttempts > 0);
  }
}

registration('Fictizia mola mucho');
registration('patatas');

/*2 - Diseña un algoritmo que imprima los numeros del 1 al 100.*/

//Usando for
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//Usando while y break
let countUpward = 1;
while (countUpward <= 100) {
  console.log(countUpward);
  countUpward++;
}

//Usando Do...While
do {
  console.log(countUpward);
  countUpward++;
} while (countUpward <= 100);

/*3 - Diseña un algoritmo que imprima los numeros del 100 al 0.*/

//Usando for
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

//Usando while y break
let countDownward = 100;
while (countDownward >= 0) {
  console.log(countDownward);
  countDownward--;
}

//Usando Do...While
do {
  console.log(countDownward);
  countDownward--;
} while (countDownward >= 0);


/* 4 - Diseña un algoritmo que imprima los numeros pares entre 0 y 100. */

//Usando for
//version 1
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  else {
    console.log(i);
  }
}

//version 2
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

//Usando while y break
let countInPairs = 0;
while (countInPairs <= 100) {
  console.log(countInPairs);
  countInPairs += 2;
}

//Usando Do...While
do {
  console.log(countInPairs);
  countInPairs += 2;
} while (countInPairs <= 100);

/* 5 - Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números. */

//Usando for
//version 1
function printOdds(userNumber) {
  let top = userNumber + 50;

  for (let i = userNumber; i <= top; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
    else {
      console.log(i += 1);
    }
  }
}

//version 2
function printOdds(userNumber) {
  let isOdd = userNumber % 2 === 0 ? userNumber + 1 : userNumber;
  let top = isOdd + 50;

  for (let i = isOdd; i <= top; i += 2) {
    console.log(i);
  }
}

printOdds(5);
printOdds(20);
printOdds(85);

//Usando while y break
function printOdds(userNumber) {
  let isOdd = userNumber % 2 === 0 ? userNumber + 1 : userNumber;
  let counter = isOdd;
  let top = isOdd + 50;

  while (counter <= top) {
    console.log(counter);
    counter += 2;
  }
}
/*
printOdds(5);
printOdds(20);
printOdds(85);
*/

//Usando Do...While
function printOdds(userNumber) {
  let isOdd = userNumber % 2 === 0 ? userNumber + 1 : userNumber;
  let counter = isOdd;
  let top = isOdd + 50;

  do {
    console.log(counter);
    counter += 2;
  } while (counter <= top);
}
/*
printOdds(5);
printOdds(20);
printOdds(85);
*/

/* 6 - Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario */

//Usando for
function sum(userInput) {
  let pairCounter = 0;
  let oddCounter = 0;
  let sumPairs = 0;

  for (let i = userInput; pairCounter <= 50; i++) {
    if (i % 2 === 0) {
      sumPairs += i;
      pairCounter++;
    }
    else {
      oddCounter++;
    }
  }

  console.log('sumPairs = ', sumPairs, 'oddCounter = ', oddCounter);
}

sum(4);
sum(7);

//Usando while y break
function sum(userInput) {
  let pairCounter = 0;
  let oddCounter = 0;
  let sumPairs = 0;
  let i = userInput;

  while (pairCounter <= 50) {
    if (i % 2 === 0) {
      sumPairs += i;
      pairCounter++;
    }
    else {
      oddCounter++;
    }

    i += 1;
  }
  console.log('sumPairs = ', sumPairs, 'oddCounter = ', oddCounter);
}

sum(4);
sum(7);

//Usando Do...While
function sum(userInput) {
  let pairCounter = 0;
  let oddCounter = 0;
  let sumPairs = 0;
  let i = userInput;

  do {
    if (i % 2 === 0) {
      sumPairs += i;
      pairCounter++;
    }
    else {
      oddCounter++;
    }

    i += 1;
  } while (pairCounter <= 50);
  console.log('sumPairs = ', sumPairs, 'oddCounter = ', oddCounter);
}

sum(4);
sum(7);


/* 7 - Nivel Avanzado ♦️ Diseña un algoritmo introducido un numero y pasarlo a número romanos. */
//Usando for
function toRomanNumber(num) {
  let numberList = num.toString().split('');
  let result = '';

  if (numberList.length === 4) {
    if (Number(numberList[0]) > 3) {
      console.log(
        'Sorry, that number is too large! It has to be less than 4000.'
      );
      return;
    }
    for (let i = 0; i < Number(numberList[0]); i++) {
      result = result.concat('M');
    }
    numberList.shift();
  }
  console.log(numberList);
  if (numberList.length === 3 && Number(numberList[0]) !== 0) {
    if (Number(numberList[0]) <= 3) {
      for (let i = 0; i < Number(numberList[0]); i++) {
        result = result.concat('C');
      }
    }
    if (Number(numberList[0]) === 4) {
      result = result.concat('CD');
    }
    if (Number(numberList[0]) === 5) {
      result = result.concat('D');
    }
    if (Number(numberList[0]) > 5 && Number(numberList[0]) < 9) {
      result = result.concat('D');
      for (let i = 0; i < Number(numberList[0]) - 5; i++) {
        result = result.concat('C');
      }
    }
    if (Number(numberList[0]) === 9) {
      result = result.concat('CM');
    }
    numberList.shift();
  }

  if (numberList.length === 2) {
    if (Number(numberList[0]) <= 3) {
      for (let i = 0; i < Number(numberList[0]); i++) {
        result = result.concat('X');
      }
    }
    if (Number(numberList[0]) === 4) {
      result = result.concat('XL');
    }
    if (Number(numberList[0]) === 5) {
      result = result.concat('L');
    }
    if (Number(numberList[0]) > 5 && Number(numberList[0]) < 9) {
      result = result.concat('L');
      for (let i = 0; i < Number(numberList[0]) - 5; i++) {
        result = result.concat('X');
      }
    }
    if (Number(numberList[0]) === 9) {
      result = result.concat('XC');
    }
    numberList.shift();
  }

  if (numberList.length === 1) {
    if (Number(numberList[0]) <= 3) {
      for (let i = 0; i < Number(numberList[0]); i++) {
        result = result.concat('I');
      }
    }
    if (Number(numberList[0]) === 4) {
      result = result.concat('IV');
    }
    if (Number(numberList[0]) === 5) {
      result = result.concat('V');
    }
    if (Number(numberList[0]) > 5 && Number(numberList[0]) < 9) {
      result = result.concat('V');
      for (let i = 0; i < Number(numberList[0]) - 5; i++) {
        result = result.concat('I');
      }
    }
    if (Number(numberList[0]) === 9) {
      result = result.concat('IX');
    }
  }
  console.log('result', result);
  return result;
}

toRomanNumber(3295);
