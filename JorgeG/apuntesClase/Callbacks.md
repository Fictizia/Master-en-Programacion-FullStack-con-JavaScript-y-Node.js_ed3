### Los pasos con Callbacks

```js
console.log("Paso 1");
console.log("Paso 2");
console.log("Paso 3");
```

```js
console.log("Paso 1");

function elPaso (fun) {
	console.log("Paso 2");
	fun();
}

elPaso(function(){
	console.log("Paso 3");
})
```

```js
function elPaso (fun) {
	console.log("Paso 2");
	fun();
}


console.log("Paso 1");


elPaso(function(){
	console.log("Paso 3");
})
```

```js
function elPaso (next) {
	console.log("Paso 2");
	next();
}

function elSiguientePaso(){
	console.log("Paso 3");
}

console.log("Paso 1");


elPaso(elSiguientePaso)
```

```js
function elPaso (next) {
	console.log("Paso 2");
	next();
}


function elUltimoPaso (seguimos) {
	console.log("Fin!")
	seguimos()
}

function elSiguientePaso(){
	console.log("Paso 3");
}

console.log("Paso 1");


elPaso(function (){
	elUltimoPaso(elSiguientePaso)
})
```

```js
function elPaso (next) {
	setTimeout(function(){
		console.log("Paso 2");
	}, 3000)
        
        next();
}

console.log("Paso 1");

elPaso(function (){
	console.log("Paso 3")
})
```

```js
function elPaso (next) {
	setTimeout(function(){
		console.log("Paso 2");
		next();
	}, 3000)
}

console.log("Paso 1");

elPaso(function (){
	console.log("Paso 3")
})
```

