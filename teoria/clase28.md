![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 28

### Ejercicios

![img](../assets/clase28/2fbe4515-8a48-4374-8b0c-bd5d2dc0e888.png)

#### 1 - Ayudemos a la NASA!

En Marte tenemos un rover llamado [curiosity](https://es.wikipedia.org/wiki/Curiosity)... Nuestro objetivo es usar la [API de la NASA](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos) para complementar este ejercicio.

**Problema:**
- La medida del tiempo para esta API son los SOLES, no todos los SOLES tenemos datos, por eso la api retorna un array vacío en algunso soles.
```JSON
{
  "photos": [
    
  ]
}
```

**Recursos**
- [Sacar un token para usar la API de la NASA](https://api.nasa.gov/index.html#apply-for-an-api-key)

**Solución:**
- Nuestro objetivo es hacer una llamada recursiva a la API de tal forma que si un SOL no tiene información útil pasamos al SOL anterior.
- Para evitar baneos necesitamos determinar la frecuencia de las llamadas recursivas en ms
- Así como podemos establecer un límite de llamadas por si salimos mucho de rango.

**Mensajes esperados por consola:**

```
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2080&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2079&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2078&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2078&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2077&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2076&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2075&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2074&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2073&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2072&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2071&api_key=XXX
Delay for next request 1000ms
request started for: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2070&api_key=XXX
currentValue: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
```

**Código Esqueleto**
```javascript
const token = "YOUR TOKEN HERE";

function NasaRequest() {
  
}; 

async function init() {
  /*
    - current sun: 2080
    - limit requests: false
    - frecuency: 1000ms
  */
  const currentValue = await NasaRequest(2080, false, 1000);
  console.log("currentValue:", currentValue);
}
init();
```

```javascript
    //Tu solución
```


