// javascript

var lista = [1,2,3,4,5]

//lista_nueva = lista*10 = [10,20,30,40,50]

// Imperativa
for (var i = 0; i < lista.length; i++) {
	var elemento = lista[i];
	console.log("Item:", elemento)
	//...
}


var lista_nueva = [];
for (var i = 0; i < lista.length; i++) {
	var elemento = lista[i];
	lista_nueva.push(elemento*10)
}


// Declarativa
lista.forEach(function(elemento){
	console.log("Item:", elemento)
	//...
})

var lista_nueva = [];
lista.forEach(function(elemento){
	lista_nueva.push(elemento*10)
})

//ES5.1
var lista_nueva = lista.map(function(elemento){
	return elemento*10
})



//+es6
const lista_nueva = lista.map(elemento => elemento*10)





