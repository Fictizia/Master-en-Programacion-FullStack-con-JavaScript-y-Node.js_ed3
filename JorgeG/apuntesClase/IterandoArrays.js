
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
