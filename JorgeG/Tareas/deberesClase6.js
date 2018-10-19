// Ejercicio 1

// usando if..else

let num1 = prompt("escriba un 1er numero","");
let num2 = prompt("escriba un 2º numero","");
if num1 === num2 {
  console.log("los numeros son iguales");
}
else if (num1 > num2) {
  console.log("el 1er numero es mayor");
}
else {
  console.log("el 2º numero es mayor");
}

// usando switch

let num1 = prompt("escriba un 1er numero","");
let num2 = prompt("escriba un 2º numero","");

let num = num1/num2

switch (true) {
  case (num > 1):
    console.log("el primer numero es mayor");
    break;
  case (num < 1):
    console.log("el segundo es mayor");
    break;
  case (num = 1):
    console.log("los numeros son iguales");
}

//Ejercicio 2

// usando if..else

let num1 = prompt("escriba un 1er numero","");
let num2 = prompt("escriba un 2º numero","");
let num3 = prompt("escriba un 3er numero","");

if (num1 > num2) && (num1 > num3) {
console.log("el 1er numero es mayor");
}
else if (num2 > num1) && (num2 > num3) {
console.log("el 2º numero es mayor");
}
else {
console.log("el 3er numero es mayor");
}
