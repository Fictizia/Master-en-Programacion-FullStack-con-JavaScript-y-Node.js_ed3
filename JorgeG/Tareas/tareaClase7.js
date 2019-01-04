/*1 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema
La palabra clave es "Fictizia mola mucho"
Solo existen tres intentos
Si se pasan los tres intentos. Se despliega un mensaje informativo.*/

var password = null;
var loginAttempts = 0;

while (loginAttempts < 3) {
    password = prompt("escribe la contraseña");
    if (password = "Fictizia mola mucho"){
        console.log("contraseña correcta");
        break;
    }
    else {
        console.log("contraseña incorrecta");
        loginAttempts += 1;
        if (loginAttempts === 3) {
            console.log("maximo numero de intentos alcanzado")
            break;
        }
    }
}

//2 - Diseña un algoritmo que imprima los numeros del 1 al 100.

// Usando for

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

// Usando while y break

var i = 1;
while (i <= 1000) {
    console.log(i);
    if (i === 100) {
    	break;
    i++;
    }
}

// Usando do-while

var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 100);

//3 - Diseña un algoritmo que imprima los numeros del 100 al 0.

// usando for

for (var i = 100; i >= 0; i--) {
    console.log(i);
}

// Usando while y break

var i = 100;
while (i => 0) {
    console.log(i);
if (i === 0) 
    	break;
    i--;
    }

// usando do-while

var i = 100;
do {
   i--;
   console.log(i);
} while (i => 0);

//4 - Diseña un algoritmo que imprima los numeros pares entre 0 y 100.


//5 - Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

// usando for

let num = 10
let count = 1

for (num = 10; count = 50 ; i--) {
    console.log(i);
}

var numeroUsuario = 8;
for (let i = numeroUsuario; i <= numeroUsuario + 50; i +2) {
  console.log(i)  
}
num % 2 === 0

// usando do...while

let num = prompt("escriba un número")

num % 2 === 0 
do { num + 2
    console.log(num)

//6 - Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario

/*7 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.
Esperamos que el número sea menor de 50
*/

