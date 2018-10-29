```js
var Magic = (function(){
    console.log("Soy 1")
    var datoSeguro = true;
    return function(num){
        console.log("Soy 2")
        return num*10
    }
})()
```

```js
var Magic = (function(){
	console.log("Soy 1")
	var coeficienteSeguro = 10;
	return function(num){
		console.log("Soy 2")
		return num*coeficienteSeguro
	}
})()
```


```js
var Magic = (function(){
	console.log("Soy 1")
	let coeficienteSeguro = 10;
	return function(num){
		console.log("Soy 2")
		return num*(coeficienteSeguro++)
	}
})()
```

```js
var Magic = (function(){
	console.log("Soy 1")
	let coeficienteSeguro = 10;
	return function(num){
		console.log("Soy 2, coeficienteSeguro:", coeficienteSeguro)
		
		if(coeficienteSeguro > 20){
			return num*coeficienteSeguro
		} else {
			coeficienteSeguro++
			Magic(num)
		}
			
	}
})()
```

```js
var Magic = (function(){
	console.log("Soy 1")
	let coeficienteSeguro = 10;
	return function(num){
		console.log("Soy 2, coeficienteSeguro:", coeficienteSeguro)
		
		if(coeficienteSeguro > 20){
			return num*coeficienteSeguro
		} else {
			coeficienteSeguro++
			Magic(num)
		}
			
	}
})()
```

