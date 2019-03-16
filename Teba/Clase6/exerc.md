### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If...else, Switch, operador ternario )

#### 1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

```js
// If...else

function comparemos (num1, num2) {
    if (num1 > num2) {
    console.log("El número mayor es " +num1)
} else if (num1 < num2) {
    console.log("En este caso, es mayor " +num2)
} else {
    console.log("...pues parece que son iguales!")
};
};
comparemos(2, 200);

```

```js
// Operador ternario
function comparemosOp (num1, num2) {
    var mensaje = "El número mayor es ";
    (num1 > num2) ? console.log(mensaje +num1) : (num1 < num2) ? console.log(mensaje +num2) : console.log("Parece que son iguales...")
}

comparemosOp(3, 5);

//Refactor DRY

function comparemosOp (num1, num2) {
    var mensaje = "El número mayor es ";
    var igualdad = "Parece que son iguales..."

    console.log((num1 > num2) ? (mensaje +num1) : (num1 < num2) ? (mensaje +num2) : igualdad)
}

comparemosOp(3, 5);

```

```js
// Switch
function comparandoSw (num1, num2){
    var mensaje = "El número mayor es ";
    switch (true)   
    {
        case (num1 > num2):
            console.log(mensaje +num1)
            break;
        case (num1 < num2):
            console.log(mensaje +num2)
            break;
        default:
            console.log("Parece que son iguales...")
    }
};
comparandoSw(3, 5);
```


#### 2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

```js
// If...else
function comparemos (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
    console.log("Es mayor " +num1)
} else if (num2 > num1 && num2 > num3) {
		console.log("Es mayor " +num2)
} else {
    console.log("Pues parece que el mayor es " +num3)
};
};
comparemos(2, 200, 400);
```

```js
// Operador ternario
function comparemosOp (num1, num2, num3) {
     var mensaje = "El número mayor es ";
    (num1 > num2 && num1 > num3) ? console.log(mensaje +num1)
        : (num2 > num1 && num2 > num3) ? console.log(mensaje +num2)
        : console.log(mensaje +num3)
};
comparemosOp(2, 200, 400);
```

```js
// Switch
function comparemosSw (um1, num2, num3) {
    var mensaje = "El número mayor es ";
    switch(true) {
        case (num1 > num2 && num1 > num3):
            console.log(mensaje +num1);
            break;
        case (num2 > num1 && num2 > num3):
            console.log(mensaje +num2);
            break;
        default:
            console.log(mensaje +num3);
	}
};
comparandoSw(100, 111, 2);
```

#### 3 - Diseña un script que siga el siguiente proceso:
- Si el primero es negativo, debe sumar los otros dos
- Sino multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.


```js
// If else...
function multiplesCosas (num1, num2, num3) {
		if (num1 < 0) {
			console.log("Vamos a sumar los otros 2 = ", num2+num3);
		} else {
			console.log("Vamos a multiplicar los 3 = ", num1 * num2 * num3);
		}
	}
multiplesCosas(2, 5, 8);
```

```js
// Operador ternario
function multiplesCosasOp (num1, num2, num3) {
    (num1 < 0) ? console.log("Sumamos los 2 = ", num2+num3)
        : console.log ("Multiplicamos los 3 = ", num1*num2*num3);
};
multiplesCosasOp(-9, 10, 4);
```

```js
// Switch
function multiplesCosasOp (num1, num2, num3) {
    switch(true){
        case (num1 < 0):
            console.log("Sumamos los 2 ", num2+num3);
            break;
        default:
            console.log("Multiplicamos los 3 ", num1*num2*num3)
    }
}
multiplesCosasOp(-9, 10, 4);
```

#### 4 - Nivel Medio :spades: Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
Se aplica un 25% cuando:
- Estamos en los meses de invierno
- Y no es viernes o fin de semana.

```js
// If...else

function rebajasInvierno(mes, dia, precio) {
	var descuento = (precio * 25) / 100;
	var precioDescuento = precio - descuento;

	if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
		if (dia === "Lunes" || dia === "Martes" || dia === "Miércoles" || dia === "Jueves") {
			console.log("Genial!! Tienes descuentazo! Precio final: ", precioDescuento);
		} else {
			console.log("Tienes que venir entre semana para el descuento! Precio final:", precio);
		};
	} else {
		console.log("Para disfrutar del descuento, vente en Invierno y entre semana a visitarnos! Precio final:", precio);
	};
}

rebajasInvierno("Marzo", "Lunes", 70);


// REFACTOR (Mejorar uso de la memoria)
function rebajasInvierno(mes, dia, precio) {

	if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
		if (dia === "Lunes" || dia === "Martes" || dia === "Miércoles" || dia === "Jueves") {
			var descuento = (precio * 25) / 100;
			var precioDescuento = precio - descuento;
			console.log("Genial!! Tienes descuentazo! Precio final: ", precioDescuento);
		} else {
			console.log("Tienes que venir entre semana para el descuento! Precio final:", precio);
		};
	} else {
		console.log("Para disfrutar del descuento, vente en Invierno y entre semana a visitarnos! Precio final:", precio);
	};
}

rebajasInvierno("Marzo", "Lunes", 70);


// REFACTOR UPGRADE (Mejorar el enfoque con ES6)
function rebajasInvierno(mes, dia, precio) {
	const mesesValidos = ["Diciembre", "Enero", "Febrero"];
	const diasNoValidos = ["Viernes", "Sábado", "Domingo"];

	if(!mesesValidos.includes(mes)) {
		console.log(`Para disfrutar del descuento, vente en Invierno y entre semana a visitarnos! Precio final: ${precio}`);
		return;
	}

	if(diasNoValidos.includes(dia)) {
		console.log(`Tienes que venir entre semana para el descuento! Precio final: ${precio}`);
		return;
	}

	const descuento = (precio * 25) / 100;
	const precioDescuento = precio - descuento;
	console.log(`Genial!! Tienes descuentazo! Precio final: ${precioDescuento}`);	
}

rebajasInvierno("Marzo", "Lunes", 70);


```


```js
// Op. ternario

function rebajasInvierno(mes, dia, precio) {
	var descuento = (precio * 25) / 100;
	var precioDescuento = precio - descuento;

	(mes === "Diciembre" || mes === "Enero" || mes === "Febrero") && (dia === "Lunes" || dia === "Martes" || dia === "Miércoles" || dia === "Jueves") ? console.log("Genial!! Tienes descuentazo! Precio final: ", precioDescuento): console.log("Para disfrutar del descuento, vente en Invierno y entre semana a visitarnos! Precio final:", precio)
}

rebajasInvierno("Marzo", "Lunes", 70);
rebajasInvierno("Diciembre", "Lunes", 70);

```

```js
// Switch

function rebajasInvierno(mes, dia, precio) {
	var descuento = (precio * 25) / 100;
	var precioDescuento = precio - descuento;

	switch (true) {
		case ((mes === "Diciembre" || mes === "Enero" || mes === "Febrero") && (dia === "Lunes" || dia === "Martes" || dia === "Miércoles" || dia === "Jueves")):
			console.log("Genial!! Tienes descuentazo! Precio final: ", precioDescuento);
			break;
		case (mes != "Diciembre" || mes != "Enero" || mes != "Febrero"):
			console.log("Para disfrutar del descuento, vente en Invierno y entre semana a visitarnos! Precio final:", precio);
			break;
	}
};

rebajasInvierno("Marzo", "Lunes", 70)


// REFACTOR UPGRADE (Mejorar el enfoque con ES6) + Returns
function rebajasInvierno(mes, dia, precio) {
	const mesesValidos = ["Diciembre", "Enero", "Febrero"];
	const diasNoValidos = ["Viernes", "Sábado", "Domingo"];

	if(!mesesValidos.includes(mes)) {
		return `Para disfrutar del descuento, vente en Invierno y entre semana a visitarnos! Precio final: ${precio}`;
	}

	if(diasNoValidos.includes(dia)) {
		return`Tienes que venir entre semana para el descuento! Precio final: ${precio}`;
	}

	const descuento = (precio * 25) / 100;
	const precioDescuento = precio - descuento;
	return `Genial!! Tienes descuentazo! Precio final: ${precioDescuento}`;	
}

console.log(rebajasInvierno("Marzo", "Lunes", 70));

```

#### 5 - Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.
```js
// If...else
function descubreNegativo(num) {
	if (num < 0) {
		console.info("Parece que " + num + " es negativo!")
	} else {
		console.info("Este número es positivo!")
	};
}

descubreNegativo(-9);

```

```js
// Op. Ternario

function descubreNegativo(num) {

	(num < 0) ? console.info("Parece que " + num + " es negativo!"): console.info("Este número es positivo!");
}

descubreNegativo(-9);

```

```js
// Switch

function descubreNegativo(num) {

	switch (true) {
		case (num < 0):
			console.info("Parece que " + num + " es negativo!");
			break;
		default:
			console.info("Este número es positivo!");
	};
}

descubreNegativo(-9);

```

#### 6 - Diseña un algoritmo que al introducir un número nos diga si es par o impar.

```js
// If...else

function descubreParidad(num) {

	if (num % 2 === 0) {
		console.info("Has descubierto un número par!")
	} else {
		console.info(num + " es un número impar!")
	};
}

descubreParidad(5);

```

```js
// Op. ternario
function descubreParidad(num) {

	(num % 2 === 0) ? console.info("Has descubierto un número par!"): console.info(num + " es un número impar!");

}

descubreParidad(5);
```

```js
// Switch

function descubreParidad(num) {

	switch (true) {
		case (num % 2 === 0):
			console.info("Has descubierto un número par!");
			break;
		default:
			console.info(num + " es un número impar!");
	};
}

descubreParidad(5);

```























