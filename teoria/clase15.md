![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 15

### ¡Hora de ingeniería inversa!

:warning: **Importante:** No uses tu cuenta de Twitter real, ya que podríamos ser desconectados de la plataforma de forma permanente 

### Ejercicios

**1 -** Twitter no nos permite usar la consola porque han sobreescrito los métodos.... ¡Es hora de solucionarlo!

:trollface: Puedes simularlo en cualquier pestaña haciendo esto:
```javascript
for (var method in console){
	console[method] = function(){}
}
```

```javascript
var loggerDiv = document.createElement('div')
loggerDiv.setAttribute("id", "logger")
document.body.appendChild(loggerDiv)
addCSS(document.getElementById("logger"), {
    "z-index": 1000,
    "font-family": "monospace",
    "color": "rgb(21, 157, 25)",
    "background-color": "black",
    "position": "fixed",
    "max-height": "300px",
    "min-height": "75px",
    "min-width": "100%",
    "bottom": "0px",
    "left": "0px",
    "padding": "10px",
    "overflow": "scroll",
    "margin": "0px",
    "box-sizing": "border-box",
    "padding-top": "30px"
})


function addCSS (element, cssObj) {
    for (var property in cssObj){
       element.style[property] = cssObj[property]
    }
}




var loggerHeader = document.createElement('h3')
loggerHeader.setAttribute("id", "logger-header")
loggerHeader.innerText = "H4CK3D TWITTER CONSOLE"
document.getElementById("logger").appendChild(loggerHeader)


addCSS(document.getElementById("logger-header"), {
    "border-bottom": "1px solid rgb(21, 157, 25)",
    "color": "rgb(21, 157, 25)",
    "z-index": 10000,
    "position":"fixed",
    "display": "block",
    "margin-top": "-30px",
    "width": "100%",
    "background-color": "black",
    "line-height": "30px"
})



// Solve (edge case): Break `console = null` logic
if (!console || typeof(console) !== "object"){
    // poner en otra tab -> Object.keys(console)
    var expectedThings = ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "group", "groupCollapsed", "groupEnd", "clear", "count", "assert", "markTimeline", "profile", "profileEnd", "timeline", "timelineEnd", "time", "timeEnd", "timeStamp", "context", "memory"]
    window.console = console || {}
    
    expectedThings.forEach(function(item){
          console[item] = function (){}
    });
}



// Restore beahviour with DOM support hack
for (var method in console){
	console[method] = function(msg){
           loggerDiv.innerHTML += `<p>${method === "memory" ? new Date().getTime() : method }: ${msg}</p>`; 
      }
}

console.log("Hi Twitter, U just got PWNED!")

console.hide = function(){
         loggerDiv.style.display = "none";
}

console.show = function(){
        loggerDiv.style.display = "block";
}
```


**2 -** Saca en un Array los ultimos 100 usuarios que han twiteado sobre `#javascript` en [Twitter](https://twitter.com/hashtag/javascript?src=hash&lang=es)
Notas:
- No necesitas estar logeado
- Necesitas primero resolver el ejercicio anterior para poder tener una consola disponible

```javascript
    // Tu solución
```

**3 -** Publica un tweet sin usar el ratón desde la web de Twitter.com... mencionando a @fictiziaEscuela :-)

```javascript
    // Tu solución
```