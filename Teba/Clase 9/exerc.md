### Ejercicios
#### 1 - Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

```js
function contarLetra (letra, frase) {
	var contador = 0;
	for (var i = 0; i < frase.length; i++) {
		console.log(frase.charAt(i));
		if (frase.charAt(i) === letra) {
			contador++;
		}
	}
	console.log('La frase ' +frase+ ' contiene la letra ' +letra+ ',' +contador+ ' veces');
}

contarLetra("m", "Fictizia mola mil");
```

