## Ejercicios

### 1 - Diseña un algoritmo que lea dos números y realice los siguientes cálculos:

- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto

```js

function calcularNums (num1, num2){
    console.info("EL resultado de la suma es:", num1+num2);
    console.info("EL resultado de la resta es:", num1-num2);
    console.info("EL resultado de la multiplicación es:", num1*num2);
    console.info("EL resultado de la división es:", num1/num2);

};
calcularNums(5,6);

```

### 2 - Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.

Trucos: calcular porcentajes (segmento*100)/total

```js

function calcPorcentual (x, y){

    var totalMujeres = x;
    var totalHombres = y;
    var totalClase = x + y;

    console.log("El porcentaje de mujeres en clase es:" , ((totalMujeres*100)/totalClase));
    console.log("El porcentaje de hombres en clase es:" , ((totalHombres*100)/totalClase));
}

calcPorcentual(2, 8);

```
