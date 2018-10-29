
### Objetivo: Reducir una dimensión una matriz...

```js

// Imperativo (Hardcore)
var matrix = [[1,2,3], [4,5,6], [7,8,9]]
var lista = [] 
for (var i = 0; i < matrix.length; i++) {
	//var nivel = matrix[i];
	for (var j = 0; j < matrix[i].length; j++) {
		lista.push(matrix[i][j])
	}
}



// Imperativo (Softcore)

var matrix = [[1,2,3], [4,5,6], [7,8,9]]
var lista = [] 

matrix.forEach(function (nivel) {
	nivel.forEach(function(item){
		lista.push(item)
	})
})


// Declarativo
var matrix = [[1,2,3], [4,5,6], [7,8,9]]
var lista = matrix.reduce(function(a,b){
	return a.concat(b)
})

```

### Objetivo: Reducir a una dimension, filtrar, modificar, ordenar...

```js
/* === DETALLES ===
- Una dimension
- Me quedo con los < 5
- Y genero la lista final con elemento *10
- De mayor a menor
- Objetivo Final: [40,30,20,10]
*/

// +ES5.1
var matrix = [[5,8], [3], [4,2,6,1], [7,9]];
var lista = matrix
		.reduce(function(a,b){return a.concat(b)})
		.filter(function(item){ return item < 5})
		.map(function(item){return item*10})
		.sort()
		.reverse()



// +ES6

const matrix = [[5,8], [3], [4,2,6,1], [7,9]];
const lista = matrix
		.reduce((a,b) => a.concat(b))
		.filter(item => item < 5)
		.map(item => item*10)
		.sort()
		.reverse()

console.log("lista:", lista)
```
