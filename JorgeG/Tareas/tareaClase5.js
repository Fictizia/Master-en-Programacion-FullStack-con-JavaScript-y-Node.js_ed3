/*Formula:
let num1 = Math.floor(math.random()*();
let num2 = Math.floor(math.random());
*/

/*1 - Diseña un algoritmo que lea dos números y realice los siguientes cálculos:
Valor de su suma
Valor de su resta
Valor de su division
Valor de su producto
*/
var num1 = prompt("introduzca un primer numero", "");
var num2 = prompt("introduzca un segundo numero", "");

console.info("el resultado de la suma es " + (num1 + num2));
console.info("el resultado de la resta es " + (num1 - num2));
console.info("el resultado de la multiplicacion es " + (num1 * num2));
console.info("el resultado de la division es " + (num1 / num2));

//2 - Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.

let numMen = prompt("introduzca el numero de hombres", "");
let numWom = prompt("introduzca el numero de mujeres", "");
let total = numMen + numWom

console.log("el porcentaje de hombres es" + (nummen/(total)*100));
console.log("el porcentaje de mujeres es" + (numwom/(total)*100));
console.log("el total de alumnos es" + (total));
