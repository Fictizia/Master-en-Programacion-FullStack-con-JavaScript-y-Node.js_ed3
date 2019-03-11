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
var invierno = {"Noviembre","Diciembre","Enero","Febrero"};
var semana = {"Lunes","Martes","Miercoles","Jueves"};
var precio = 100;
var descuento = (precio*25)/100;

```














