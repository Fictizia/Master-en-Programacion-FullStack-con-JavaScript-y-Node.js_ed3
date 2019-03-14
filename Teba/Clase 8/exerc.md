### Ejercicios
#### 1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

```js
   function tirarMoneda() {

        var valor = Math.floor((Math.random() * 2));

        if (valor === 1){
            console.info("Cara!!");
        } else {
            console.info("Cruz!");
        }

    }
 ```
 #### 2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
 
 ```js
function throwDices(n) {

	var counter = 0;
	for (var i=0; i<=100; i++){

	var dado1 = Math.round((Math.random()*6) +1);
	var dado2 = Math.round((Math.random()*6) +1);
	var sumaDados = dado1 + dado2;

	if (sumaDados === 10) {
		counter++;
		}
	};
	console.log("Tiraditas tiraditas...¿cuántas veces han sumado 10? ", +counter);
}
throwDices();
```

#### 4 - ¿Que fecha será dentro de 30 días?

```js
var theBigDay = new Date(2019, 2, 14);
theBigDay.toLocaleString();

var theBigDay = new Date(2019, 2, 14);
theBigDay.setDate(theBigDay.getDate() + 30);  
theBigDay.toLocaleString();

// "13/4/2019 0:00:00"
```
