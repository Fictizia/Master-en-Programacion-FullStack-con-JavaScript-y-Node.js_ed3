![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 30

### HTML5 Router
- [A JavaScript router in 20 lines by joakimbeng](http://joakim.beng.se/blog/posts/a-javascript-router-in-20-lines.html)
- [JavaScript template engine in just 20 lines by Krasimir](http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line)
- [A modern JavaScript router in 100 lines by Krasimir](http://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url)
- [Achieving routing using pure Javascript by muralikrishnat](https://gist.github.com/muralikrishnat/9c7049fda1a3708c780c)
- [Navigo, _A simple vanilla JavaScript router with a fallback for older browsers_](https://github.com/krasimir/navigo)

### Rutas usando Hashes

**Leyendo el hash**
```javascript
// domain.com/ruta#hashes...
console.log(window.location.hash);      // hashes...

function hashActual () {
    return window.location.href.split('#')[1] || '';
}

console.log("hash:", hashActual());     // hash: hashes...
```


**Cambiando el hash**
```javascript
function hashActual () {
    return window.location.href.split('#')[1] || '';
}

function navigate (path) {
  var current = window.location.href;
  window.location.href = current.replace(/#(.*)$/, '') + '#' + path;
}

navigate("party-hard")
console.log("hash:", hashActual());     // party-hard
```


**Eventos en el Hash**
```javascript
function hashActual () {
    return window.location.href.split('#')[1] || '';
}

window.addEventListener("hashchange", function(){
    console.log("Hash actual:", hashActual() )
}, false);
```

### HTML5 ofrece `history.pushState()` y `history.replaceState()`
- `pushState` genera una entrada nueva en el historial, pero `replaceState` la cambia
```javascript
// Estamos en https://www.fictizia.com/profesorado
var infoDeEstado = { foo: "bar" };
history.pushState(infoDeEstado, "título de la web", "profesorado/ulises-gascon");
// Cambia la URL sin recargar la pagina a https://www.fictizia.com/profesorado/ulises-gascon
```
- Tambien contamos con eventos y datos que podemos pasarnos
- Solo se disparan cuando el usuario va hacia atras o delante...
```javascript
window.addEventListener('popstate', function(event) {
    console.log('popstate fired!');
    console.log('info de estado: ' + JSON.stringify(event.state));
});
```
- [Ejemplo con gatitos](http://html5doctor.com/demos/history/)

**Tenemos que preparar el backend**
- Con el sistema de rutas HTML5 no debemos enviar peticiones al backend
- Deberiamos cuadrar las rutas para funcionar con un fallback a nuestra SPA
```
                                  ----- server ------
              http://site.com --> |                 | 
                                  |   /index.html   |
                   index.html <-- |                 |
                                  -------------------

                                  ----- server ------
http://site.com/products/list --> |                 | 
                                  |   /index.html   |
           404 page not found <-- |                 |
                                  -------------------
```
- [¿Cómo configurar tu servidor?](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)


### Routers destacados
- [visionmedia/page.js](https://github.com/visionmedia/page.js)
- [krasimir/navigo](https://github.com/krasimir/navigo)
- [swipely/aviator](https://github.com/swipely/aviator)


![img](../assets/clase30/b914110f-2f4c-4a2e-bc10-d3d22cec2bde.jpeg)

**¡Viva la ingenieria inversa!**
- [A really simple Javascript router](https://gist.github.com/joakimbeng/7918297)
- [template engine + routes](https://github.com/vitiral/notes/blob/ad75620f9b5445b18369408a7b23666e84624c0d/js/router/index.html)

### Templates

**Librerías principales**
- [mustache](https://mustache.github.io/)
- [Handlebars](http://handlebarsjs.com/)
- [dOt](https://olado.github.io/doT/)
- [Dust](http://www.dustjs.com/)
- [EJS](http://ejs.co/)
- [Pug](https://pugjs.org/)
- [Template7](http://www.idangero.us/template7/)
- [Lodash](https://lodash.com/docs/4.17.10#template)

**Recursos**
- [ES6 Template Literals, the Handlebars killer?](https://www.keithcirkel.co.uk/es6-template-literals/)
- [Learn Handlebars in 10 Minutes or Less](https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes)
- [JavaScript Micro-Templating de John Resig](https://johnresig.com/blog/javascript-micro-templating/)

### Ejercicios

**1 -** [Reto Navideño] Implementa un sistema de rutas con llamadas Ajax y plantillas partiendo de la API de AireMAD.
- Al menos creas tres rutas `/`, `/estacion`, `/estacion/:id`
- La ruta `/estacion` y `/estacion/:id` deben resolverse haciendo una llamada Ajax `http://airemad.com/api/v1/station/:id` y pintar sus resultados haciendo uso de plantillas
- La url debe de poder compartise, permitiendo acceder a ese estado de la aplicación.
- Debes generar un contexto común en la app (nav, footer, etc...). Solo parte del contenido es diámico
- Debes gestionar los errores 404 y similares... 
- Igual es interesante preocuparnos de los posibles ataques XSS: [Npm | dompurify](https://www.npmjs.com/package/dompurify), [Npm | XSS](https://www.npmjs.com/package/xss)
- Puedes usar una librería si te ayuda, como [navigo](https://github.com/krasimir/navigo)

![Img](https://media.giphy.com/media/RdzzVrtvfqnM4/giphy.gif)

```javascript
//Tu solución
```