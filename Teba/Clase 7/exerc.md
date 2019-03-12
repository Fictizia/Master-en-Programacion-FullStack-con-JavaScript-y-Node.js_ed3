#### 1 - Nivel Medio ♠️ Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:
- La palabra clave es "Fictizia mola mucho"
- Solo existen tres intentos
- Si se pasan los tres intentos. Se despliega un mensaje informativo.

```js
// Usando for...

function identificaCliente () {
	var claveCorrecta = "Fictizia mola mucho";
	var intentos = 3;
  for (var i = 0; i < intentos; i++) {
    var claveIntento = prompt("Introduce tu clave");
    if (claveIntento === claveCorrecta){
      alert("Cliente identificado!");
      break;
    } else {
      console.warn("Clave fallida, inténtalo de nuevo");
    }
  };
  if (i >= intentos) {
    console.warn("Te quedaste sin intentos!");
  }
}

identificaCliente();
```

```js
// Usando while y break
function identificaCliente() {
	var claveCorrecta = "Fictizia mola mucho";
	var intentos = 3;
	var control = 0;
	while (control <= intentos) {
		var claveIntento = prompt("Introduce tu clave");
		if (claveIntento === claveCorrecta) {
			alert("Cliente identificado!");
			break;
		} else {
			console.warn("Clave fallida, inténtalo de nuevo");
			control++;
			if (control >= intentos) {
				console.warn("Te quedaste sin intentos");
				break;
			}
		}
	};
}

identificaCliente();
```
