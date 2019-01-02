//1 - programa que imprime los numeros del 1 al 100

for (i = 0; i < 100; i++){
  console.log(i);
  }
  
//2 - programa que muestra los numeros del 100 al 0

for (i = 100; i >= 0; i--){
  console.info(i);
  }
  
 //3 - diseña un programa que muestre los numeros pares entre 0 y 100
 
for (i = 0; i < 100; i++){
  if (i%2 === 0){
  console.info(i);
    }
  }

//4 - Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz

var coin = Math.round(Math.random()*(1 -0) + 0);
  if (coin === 1){
    console.log("ha salido cara");
  }
  else {
    console.log("ha salido cruz");
  }

//5 - diseña un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10

var dice1 = Math.round(Math.random()*(6 -1) + 1);
var dice2 = Math.round(Math.random()*(6 -1) + 1);
var coincidences = 0;

function roll2Dices (dice1, dice2) {
  for (i = 0; i < 100; i++){
    if (dice1 + dice2 = 10){
      coincidences += 1;
    }
    }
  }

//6 - Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso

var nummen = prompt("introduce el numero de hombres");
var numwomen = prompt("introduce el numero de mujeres");
var total = nummen + numwomen;

var pctmen = nummen*100 / total;
var pctwomen = numwoman*100 / total;

console.log("el procentaje de hombres es" + pctmen);
console.log("el porcentaje de mujeres es" + pctwomen);


/*7 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas:
Se aplica un 25% cuando:
Estamos en los meses de invierno
Y no es viernes o fin de semana.
*/

var month = prompt("escribe el mes en el que estamos");
var day = prompt("escribe el día de la semana que es hoy");
var price = prompt("escribe el precio del producto");
var dicountedPrice = price*0.75;

month = month.toLowerCase();
day = day.toLowerCase();

if (((month === "enero") || (month === "febrero") || (month === "marzo")) && ((day !== "viernes") && (day !== "sabado") && (day !== "domingo"))){
  console.log("Precio rebajado!" + discountedPrice)
}
  else {
    console.log("Precio normal" + price);
  }

/*8 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
Características:
La palabra clave es "Fictizia mola mucho"
Solo existen tres intentos
Si se pasan los tres intentos. Se despliega un mensaje informativo.
*/



/*9 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.

Esperamos que el número sea menor de 50
*/

