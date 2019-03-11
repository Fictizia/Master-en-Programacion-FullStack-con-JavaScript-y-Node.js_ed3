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
// Switch
function comparemosOp (num1, num2) {
    var mensaje = "El número mayor es ";
    (num1 > num2) ? console.log(mensaje +num1) : (num1 < num2) ? console.log(mensaje +num2) : console.log("Parece que son iguales...")
}

comparemosOp(3, 5);
```
