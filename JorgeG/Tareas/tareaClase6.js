//1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

//usando if-else

let num1 = prompt("escriba un primer numero","");
let num2 = prompt("escriba un segundo numero","");
if num1 === num2 {
  console.log("los numeros son iguales");
}
else if (num1 > num2) {
  console.log("el 1er numero es mayor");
}
else {
  console.log("el 2º numero es mayor");
}

//usando switch

let num1 = prompt("escriba un primer numero","");
let num2 = prompt("escriba un segundo numero","");

switch (true) {
  case (num1 > num2):
    console.log("el primer numero es mayor");
    break;
  case (num1 < num2):
    console.log("el segundo es mayor");
    break;
  default:
    console.log("los numeros son iguales");
}

//2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

//usando if-else

let num1 = prompt("escriba un primer numero","");
let num2 = prompt("escriba un segundo numero","");
let num3 = prompt("escriba un tercer numero","");

if ((num1 > num2) && (num1 > num3)) {
console.log("el 1er numero es mayor");
}
else if ((num2 > num1) && (num2 > num3)) {
console.log("el 2º numero es mayor");
}
else {
console.log("el 3er numero es mayor");
}

//usando switch

let num1 = prompt("escriba un primer numero","");
let num2 = prompt("escriba un segundo numero","");
let num3 = prompt("escriba un tercer numero","");


switch (true) {
  case ((num1 > num2) && (num1 > num3)):
    console.log("el primer numero es mayor");
    break;
  case ((num2 > num1) && (num2 > num3)):
    console.log("el segundo es mayor");
    break;
  case ((num3 > num1) && (num3 > num2)):
    console.log("el tercero es mayor");
    break;
  default:
    console.log("los numeros son iguales");
}

/*3 - Diseña un script que siga el siguiente proceso:
Si el primero es negativo, debe sumar los otros dos
Sino multiplicará los tres numeros
Mostrar el resultado final incluyendo una referencia a la operación realizada.
*/

//usando if-else

let num1 = prompt("escriba un primer numero","");
let num2 = prompt("escriba un segundo numero","");
let num3 = prompt("escriba un tercer numero","");

if (num1 < 0) {
  console.log("primer numero negativo, sumo los otros dos " + (num2 + num3));
}
else {
  console.log("primer numero positivo, multiplico todos entre ellos " + (num1 * num2 * num3));
}

//usando switch

let num1 = prompt("escriba un primer numero","");
let num2 = prompt("escriba un segundo numero","");
let num3 = prompt("escriba un tercer numero","");

switch (true) {
  case (num1 < 0):
    console.log("primer numero negativo, sumo los otros dos " + (num2 + num3));
    break;
  default:
    console.log("primer numero positivo, multiplico todos entre ellos " + (num1 * num2 * num3));
}





