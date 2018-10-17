/* 2 - Diseña un algoritmo que lea dos números y realice los siguientes cálculos:
Valor de su suma
Valor de su resta
Valor de su division
Valor de su producto */

let result;

function aritmeticOperations(num1, num2) {
  let sum = num1 + num2;
  let subtract = num1 - num2;
  let divide = num1 / num2;
  let multiply = num1 / num2;

  return result = {
    sum: sum,
    subtract: subtract,
    divide: divide,
    multiply: multiply
  };
}

aritmeticOperations(8, 9);

console.table(result);

/* 3 - Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.
Trucos:
Calcular porcentajes (segmento*100)/total */

const womenCount = 5;
const menCount = 3;
let percentages;

function percentage() {
  const totalStudents = womenCount + menCount;
  const womenPercentage = (womenCount * 100) / totalStudents;
  const menPercentage = (menCount * 100) / totalStudents;

  return result = {
    totalStudents: totalStudents,
    womenPercentage: womenPercentage,
    menPercentage: menPercentage
  };
}

percentage(womenCount, menCount);

console.table(percentages);
