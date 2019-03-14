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
	var dado1, dado2;
	var counter = 0;
	dado1 = Math.round((Math.random()*5) +1);
	dado2 = Math.round((Math.random()*5) +1);
	var sumaDados = dado1 + dado2;

	if (sumaDados === 10) {
		counter++;
	}
}
throwDices(100);
```

