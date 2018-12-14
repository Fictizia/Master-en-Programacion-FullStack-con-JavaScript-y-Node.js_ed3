## Asincronia con 2 funciones (`a` y `b`)

### Sin Argumentos
```javascript
document.body.addEventListener("click", function(){
	a(b)
})

function a (cb) {
	console.log("A")
	cb()
}

function b () {
	console.log("B")
}

```

### CON Argumentos
```javascript
document.body.addEventListener("click", function(){
	var emailUser = input_user.value.trim()
	a(emailUser, b)
})

function a (email, cb) {
	console.log("Email Original:", email)
	setTimeout(function(){
		var nuevoEmail = email + new Date().getTime()
		console.log("Nuevo:", nuevoEmail)
		cb(nuevoEmail)
	}, 2000)
}

function b (newEmail) {
	console.log("Finalmente:", newEmail)
	document.body.innerText = newEmail;
}
```

### CON Promesas
```javascript
document.body.addEventListener("click", function(){
	var emailUser = input_user.value.trim()
	a(emailUser)
		.then(b)
		.catch(console.warn) // gestiona el reject si eso....
})

function a (email) {
	return new Promise(function (resolve, reject){
		console.log("Email Original:", email)
		setTimeout(function(){
			var nuevoEmail = email + new Date().getTime()
			console.log("Nuevo:", nuevoEmail)
			resolve(nuevoEmail)
		}, 2000)
	})
}

function b (newEmail) {
	console.log("Finalmente:", newEmail)
	document.body.innerText = newEmail;
}

```

### CON Async Await (sin gestión de errores)
```javascript
document.body.addEventListener("click", async function(){
	var emailUser = input_user.value.trim()

	const nuevoEmail = await a(emailUser)
	b(nuevoEmail)
})

function a (email) {
	return new Promise(function (resolve, reject){
		console.log("Email Original:", email)
		setTimeout(function(){
			var nuevoEmail = email + new Date().getTime()
			console.log("Nuevo:", nuevoEmail)
			resolve(nuevoEmail)
		}, 2000)
	})
}

function b (newEmail) {
	console.log("Finalmente:", newEmail)
	document.body.innerText = newEmail;
}
```

### CON Async Await y gestión de errores
```javascript
document.body.addEventListener("click", async function(){
	var emailUser = input_user.value.trim()
	try {
		const nuevoEmail = await a(emailUser)
		b(nuevoEmail)
	} catch (err) {  // gestiona el reject si eso....
		console.warn(err)
	}

})

function a (email) {
	return new Promise(function (resolve, reject){
		console.log("Email Original:", email)
		setTimeout(function(){
			var nuevoEmail = email + new Date().getTime()
			console.log("Nuevo:", nuevoEmail)
			resolve(nuevoEmail)
		}, 2000)
	})
}

function b (newEmail) {
	console.log("Finalmente:", newEmail)
	document.body.innerText = newEmail;
}
```

## Asincronia con `n` funciones (`a`, `b` y `c`)

### Sin Argumentos
```javascript
document.body.addEventListener("click", function(){
	//CALLBACK HELL!! -> http://blog.mclain.ca/assets/images/callbackhell.png
	a(function (){
		b(function(){
			c()
		})
	})
})


function a (cb) {
	console.log("A")
	cb()
}

function b (cb) {
	console.log("B")
	cb()
}


function c () {
	console.log("C")
}
```

### CON Argumentos
```javascript
document.body.addEventListener("click", function(){
	var emailUser = input_user.value.trim()
	//CALLBACK HELL!! -> http://blog.mclain.ca/assets/images/callbackhell.png
	a(emailUser, function(newEmail){
		b(newEmail, function(secretMail){
			c(secretMail)
		})
	})
})


function a (email, cb) {
	console.log("Email Original:", email)
	setTimeout(function(){
		var nuevoEmail = email + new Date().getTime()
		console.log("Nuevo:", nuevoEmail)
		cb(nuevoEmail)
	}, 2000)

}

function b (newEmail, cb) {
	setTimeout(function(){
		const secret = `secret-${newEmail}.git`
		console.log("Secreto:", secret)
		cb(secret);
	}, 2500)
}


function c (secretMail) {
	console.log("Finalmente:", secret)
	document.body.innerText = newEmail;
}
```

### CON Promesas
```javascript
document.body.addEventListener("click", function(){
	var emailUser = input_user.value.trim()
	a(emailUser)
		.then(b)
		.then(c)
		.catch(console.warn) // gestiona el reject si eso....
})


function a (email) {
	return new Promise(function (resolve, reject){
		console.log("Email Original:", email)
		setTimeout(function(){
			var nuevoEmail = email + new Date().getTime()
			console.log("Nuevo:", nuevoEmail)
			resolve(nuevoEmail)
		}, 2000)
	})
}

function b (newEmail) {
	return new Promise(function (resolve, reject){
		setTimeout(function(){
			const secret = `secret-${newEmail}.git`
			console.log("Secreto:", secret)
			resolve(secret);
		}, 2500)
	})
}


function c (secretMail) {
	console.log("Finalmente:", secret)
	document.body.innerText = newEmail;
}

```

### CON Async Await (sin gestión de errores)
```javascript
document.body.addEventListener("click", async function(){
	var emailUser = input_user.value.trim()

	const nuevoEmail = await a(emailUser)
	const secret = await b(nuevoEmail)
	c(secret)
})



function a (email) {
	return new Promise(function (resolve, reject){
		console.log("Email Original:", email)
		setTimeout(function(){
			var nuevoEmail = email + new Date().getTime()
			console.log("Nuevo:", nuevoEmail)
			resolve(nuevoEmail)
		}, 2000)
	})
}

function b (newEmail) {
	return new Promise(function (resolve, reject){
		setTimeout(function(){
			const secret = `secret-${newEmail}.git`
			console.log("Secreto:", secret)
			resolve(secret);
		}, 2500)
	})
}


function c (secretMail) {
	console.log("Finalmente:", secret)
	document.body.innerText = newEmail;
}
```

### CON Async Await y gestión de errores
```javascript
document.body.addEventListener("click", async function(){
	var emailUser = input_user.value.trim()
	try {
		const nuevoEmail = await a(emailUser)
		const secret = await b(nuevoEmail)
		c(secret)
	} catch (err) {  // gestiona el reject si eso....
		console.warn(err)
	}

})


function a (email) {
	return new Promise(function (resolve, reject){
		console.log("Email Original:", email)
		setTimeout(function(){
			var nuevoEmail = email + new Date().getTime()
			console.log("Nuevo:", nuevoEmail)
			resolve(nuevoEmail)
		}, 2000)
	})
}

function b (newEmail) {
	return new Promise(function (resolve, reject){
		setTimeout(function(){
			const secret = `secret-${newEmail}.git`
			console.log("Secreto:", secret)
			resolve(secret);
		}, 2500)
	})
}


function c (secretMail) {
	console.log("Finalmente:", secret)
	document.body.innerText = newEmail;
}

```
