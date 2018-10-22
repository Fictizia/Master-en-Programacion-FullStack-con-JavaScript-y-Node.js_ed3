![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 6


### Asignación por igualdad
```javascript
	var administrador = 'Yo mismo';
	var esAdministrador = (administrador === 'Yo mismo');
```
    
### If... else

- Estructura:
    ```javascript
    /* IF ...ELSE
    if (-algo verdadero-) {
        -ejecutaremos este código-
    } else {
        -Si lo anterior no era verdadero, se ejecutara este código-
    };
    */
    ```

- Documentación:
    - [If... else en w3schools](http://www.w3schools.com/js/js_if_else.asp)
    - [If... else en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

- Ejemplo:
    ```javascript
    if (true) {
        console.log("true, por eso me ejecuto");
    } else {
        console.log("false, por eso me ejecuto");
    }
    ```


### Else if...

```javascript
function testCondiccion (condicion){
    if (condicion == 1) {
        console.log("1, por eso me ejecuto");
    } else if (condicion == 2){
        console.log("2, por eso me ejecuto");
    } else {
        console.log("no es 1 o 2, por eso me ejecuto");
    }
}
```

### If en línea

- Puede ser muy util pero no es recomendado
	```javascript
	if(true) console.log("Funciona!")
	```
- [Genera problemas de legibilidad serios](https://stackoverflow.com/a/4797368)



### Switch

- Estructura:
    ```javascript
    /* Switch
	switch(expresión) {
	    case n:
	        //Código
	        break;
	    case n:
	        //Código
	        break;
	    default:
	        //Código
	}
    */
    ```

- Documentación:
    - [Switch en w3schools](http://www.w3schools.com/js/js_switch.asp)
    - [Switch en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch)

- **Casos únicos:**
    ```javascript
	var nombre = "";
	switch (nombre) {
	  case "Pepe":
	    console.log("Hola Pepe");
	    break;
	  case "Luis":
	    console.log("Hola Luis");
	    break;
	  case "Antonio":
	    console.log("Hola Antonio");
	    break;
	  default:
	    console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

- **Multiples coincidencias:**
    ```javascript
	var nombre = "";
	switch (nombre)
	{
	   case "Pepe":
	   case "Luis":
	   case "Antonio":
	       alert('Hola '+nombre);
	       break;

	   default:
	       console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

### `Nivel Medio` :spades: Operador Ternario (?:)

- Estructura:
    ```javascript
    /* 
    -- Una operación por caso --
	condicion ? expresion1 : expresion2 
    
    -- Multiples Operaciones por caso --
	condicion ? (
		operacion1,
		operacion2,
		otraoperacion
	) : ( 
		operacion1,
		operacion2,
		otraoperacion
	);

    -- Evaluaciones multiples --
    	condicion ? expresion1 : condicion2 ? expresion1 : expresion2;
    */
    ```

- Una operación por caso:
```javascript
	var esMiembro = true;
	console.info("El pago son  " + (esMiembro ? "20.00€" : "50.00€"));
```

- Evalución múltiple:
```javascript
	var esMiembro = true;
	var esAdulto = true;
	console.info(esMiembro ? "El pago son 20.00€" : esAdulto ? "Puedes enviar la solicitud cuando quieras" : "Tines que esperar aún. Lo siento.");
```

- Múltiples Operaciones:
```javascript
	var mensaje,
	esMiembro = true;
	
	esMiembro ? (
		mensaje = "El pago son 20.00€",
		console.info(mensaje)
	) : (
		mensaje = "El pago son 50.00€",
		console.info(mensaje)
	);
```

### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If...else, Switch, operador ternario )

**1 -** Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

- Usando *if...else*
```javascript
	function compararNumeros (valor1, valor2) {
		if (valor1 > valor2) {
			console.info(valor1, "es mayor.")
		} else if (valor1 < valor2){
			console.info(valor2, "es mayor.")
		} else {
			console.info("Son iguales")
		};
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function compararNumeros (valor1, valor2) {
		(valor1 > valor2) ? console.info(valor1, "es mayor.") 
			: (valor1 < valor2) ? console.info(valor2, "es mayor.") 
			: console.info("Son iguales");
	}
```

- Usando *Switch*
```javascript
	function compararNumeros (valor1, valor2) {
		switch (true){
			case (valor1 > valor2):
				console.info(valor1, "es mayor.");
				break;
			case (valor1 < valor2):
				console.info(valor2, "es mayor.");
				break;
			default:
				console.info("Son iguales");
		}
	}
```

**2 -** Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

- Usando *if...else*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		if (valor1 > valor2 && valor1 > valor3) {
			console.info(valor1, "es mayor.")
		} else {
			if(valor2 > valor3){
				console.info(valor2, "es mayor.")
			} else {
				console.info(valor3, "es mayor.")
			}
		};
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		(valor1 > valor2 && valor1 > valor3) ? console.info(valor1, "es mayor.") 
			: (valor2 > valor3) ? console.info(valor2, "es mayor.") 
			: console.info(valor3, "es mayor.");
	}
```

- Usando *Switch*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		switch (true){
			case (valor1 > valor2 && valor1 > valor3):
				console.info(valor1, "es mayor.");
				break;
			case (valor2 > valor3 && valor2 > valor1):
				console.info(valor2, "es mayor.");
				break;
			default:
				console.info(valor3, "es mayor.")
		}
	}
```


**3 -** Diseña un script que siga el siguiente proceso:
- Si el primero es negativo, debe sumar los otros dos
- Sino multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.

- Usando *if...else*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		if (valor1 < 0) {
			console.log("El resultado de la suma es", valor2+valor3)
		} else {
			console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3)
		};
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		(valor1 < 0) ? console.log("El resultado de la suma es", valor2+valor3) 
			: console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3);
	}
```

- Usando *Switch*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		switch(true){
			case (valor1 < 0):
				console.log("El resultado de la suma es", valor2+valor3)
				break;
			default:
				console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3);
		}
	}
```


**4 -** `Nivel Medio` :spades: Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.

- Usando *if...else*
```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
			
			if(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo"){
				console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
			} else {
				console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
			}

		} else {
			console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
		};

	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		(mes === "Diciembre" || mes === "Enero" || mes === "Febrero") ? 
				(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo") ?
				 console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio)
				 : console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento)
		: console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
	}
```

- Usando *Switch*

```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		switch (true) {
			case ((mes === "Diciembre" || mes === "Enero" || mes === "Febrero") && (diaSemana !== "Viernes" && diaSemana !== "Sabado" && diaSemana !== "Domingo")):
				console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
				break;
			case (mes !== "Diciembre" && mes !== "Enero" && mes !== "Febrero"):
				console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
				break;
			default:
				console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
		}

	}
```


**5 -** Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.

- Usando *if...else*
```javascript
	function esPositivo (numero) {

		if(numero < 0){
			console.info(numero, " es negativo");
		} else {
			console.info(numero, " es positivo");
		}

	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function esPositivo (numero) {
		(numero < 0) ? console.info(numero, " es negativo")
			: console.info(numero, " es positivo");
	}
```

- Usando *Switch*
```javascript
	function esPositivo (numero) {

		switch(true){
			case (numero < 0):
				console.info(numero, " es negativo");
				break;
			default:
				console.info(numero, " es positivo");
		}

	}
```

**6 -** Diseña un algoritmo que al introducir un número nos diga si es par o impar.

- Usando *if...else*
```javascript
	function esPar (numero) {

		if(numero %2 === 0 ){
			console.info(numero, " es par");
		} else {
			console.info(numero, " es impar");
		}
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function esPar (numero) {
		(numero %2 === 0) ? console.info(numero, " es par")
			: console.info(numero, " es impar");
	}
```

- Usando *Switch*
```javascript
	function esPar (numero) {

		switch(true){
			case (numero %2 === 0):
				console.info(numero, " es par");
				break;
			default:
				console.info(numero, " es impar");
		}

	}
```


### Tiempo para proyecto personal

![img_promo](../assets/clase6/aa82a7c6-8485-4f55-a64c-59b0157d369d.gif)
