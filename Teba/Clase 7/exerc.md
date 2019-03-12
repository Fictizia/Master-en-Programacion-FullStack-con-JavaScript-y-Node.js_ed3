#### 1 - Nivel Medio ♠️ Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:
- La palabra clave es "Fictizia mola mucho"
- Solo existen tres intentos
- Si se pasan los tres intentos. Se despliega un mensaje informativo.

```js
// Usando for...

function identificaCliente () {
	var claveCorrecta = "Fictizia mola mucho";
	var intentos = 3;
  for (var i = 0; i < intentos; i++) {
    var claveIntento = prompt("Introduce tu clave");
    if (claveIntento === claveCorrecta){
      alert("Cliente identificado!");
      break;
    } else {
      console.warn("Clave fallida, inténtalo de nuevo");
    }
  };
  if (i >= intentos) {
    console.warn("Te quedaste sin intentos!");
  }
}

identificaCliente();
```

```js
// Usando while y break
function identificaCliente() {
	var claveCorrecta = "Fictizia mola mucho";
	var intentos = 3;
	var control = 0;
	while (control <= intentos) {
		var claveIntento = prompt("Introduce tu clave");
		if (claveIntento === claveCorrecta) {
			alert("Cliente identificado!");
			break;
		} else {
			console.warn("Clave fallida, inténtalo de nuevo");
			control++;
			if (control >= intentos) {
				console.warn("Te quedaste sin intentos");
				break;
			}
		}
	};
}

identificaCliente();
```

```js
// Usando Do...while

function identificaCliente() {
	var claveCorrecta = "Fictizia mola mucho";
	var intentos = 3;
	var i = 0;

	do {
		var claveIntento = prompt("Introduce tu clave");
		if (claveIntento === claveCorrecta) {
			alert("Cliente identificado!");
			break;
		} else {
			console.warn("Clave fallida, inténtalo de nuevo");
		}
		i++;
	} while (i < 3);

	if (i >= intentos) {
		console.warn("Te quedaste sin intentos");
	}
}
identificaCliente();
```

#### 2 - Diseña un algoritmo que imprima los numeros del 1 al 100.

```js
// Usando for
function printNumbers (){
	for (var i = 0; i <= 100; i++) {
	console.log("Este es el número " +i);
	};
}

printNumbers();
```

```js
// Usando while

function printNumbers (){
	var control = 0; 

	while (control <= 100) {
	console.log("Este es el número " +control);
	control++;
	};
}

printNumbers();
```

```js
// Usando Do...while
function printNumbers() {
	var control = 0;

	do {
		console.log("Este es el número " + control);
		control++;
	} while (control <= 100);
}

printNumbers();
```

#### 3 - Diseña un algoritmo que imprima los numeros del 100 al 0.

```js
// Usando for...

function printNumbers (){
	for (var i = 100; i > 0; i--) {
	console.log("Este es el número " +i);
	};
}
printNumbers();

```

```js
// Usando while

function printNumbers (){
	var i = 100;
	while (i > 0) {
	console.log("Este es el número " +i);
	 i--;
	};
}
printNumbers();

```

```js
// Usando Do..while

function printNumbers (){
	var i = 100;
	do {
		console.log("Este es el número " +i);
 		i--;
	} while (i > 0);
}

printNumbers();

```

#### 4 - Diseña un algoritmo que imprima los numeros pares entre 0 y 100.

```js
// Usando for...
function printNumbers() {
	for (var i = 0; i <= 100; i++) {
		if (i % 2 === 0) {
			console.log("Este es el número " + i);
		}
	};
}
printNumbers();

```

```js
// Usando while

function printEven (){
	var i = 0;
	while (i <= 100) {
		console.log(i);
		i += 2;
	};
}

printEven();
```

```js
// Usando Do...while

function printEven (){
	var i = 0;
	do {
		if (i %2 === 0) {
			console.log(i);
		}
		i++;	
	} while (i <= 100);
}
printEven();

```

#### 5 - Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

```js
// Usando for
function printOdd (n) {
	var numDesde = n;
	var maximo = n+50;
	for (var i = n; i <= maximo; i++){
		if (i %2 != 0){
			console.log(i);
		};
	};
}

printOdd(150);
```

```js
// Usando while...

function printOdd (n) {
	var numDesde = n;
	var maximo = n+50;
	var i = n; 
	
	while (i <= maximo){
		if (i %2 != 0){
			console.log(i);
		}; i++;
	};		
}
printOdd(150);
```


```js
// Usando Do...while

function printOdd(n) {
	var numDesde = n;
	var maximo = n + 50;
	var i = n;


	do {
		if (i % 2 != 0) {
			console.log(i);
		};
		i++;
	} while (i <= maximo);
}

printOdd(150);
```

#### 6 - Diseña un algoritmo que imprima, partiendo de un número dado por el usuario:
- La suma de los 50 primeros numeros pares 
- El total de números impares

```js
function sumEven (n) {
	var even = 0;
	var odd = 0;

	for (var i = n; odd <= 50; i++) {
		if (i %2 === 0) {
			even += i;
		} else {
			odd++;
		};
	};
	console.log("Esta es la suma de los pares ", +even+ " y el total de los impares ", +odd);
}

sumEven(10);
```




























