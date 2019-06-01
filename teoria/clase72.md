![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 72

### ¡Live Coding! :muscle:

**1 -** Migra la aplicación de MovieFire para hacer una APIRest con Nodejs

Claves:
- Puedes usar librerías como `request`, `morgan`, `helmet`, `firebase`...
- Puedes dejar un front listo en `/public` y habilitar la ruta `/` para dar soporte
- Manten una buena estructura separando rutas y modelos, puedes usar `async/await` para simplificar el trabajo
- Recuerda normalizar la estructura de datos que nos devuelve la API de OMBD
- :warning: reutilizaremos este ejercicio en el futuro con otras bases de datos, asi que intentan aislar y abstraer la conexión a la base de datos ;-)

Rutas:
- `[GET] /api/movies` retorna un JSON con  todas las películas, array de objetos `[{id, name, title...},{}]`
- `[GET] /api/movies/:id` retorna un JSON con los detalles de una película en concreto, objeto `{}`
- `[POST] /api/movies` Crea una pelicula y retorna un status `200`. Payload `{name: ""}`
- `[PUT] /api/movies` Actualiza el nombre de una película y retorna un status `200`. Payload `{id: "", name: ""}`
- `[DELETE] /api/movies` Borra una película y retorna un status `200`. Payload `{id: ""}`


**[Solución](../OTROS/movie_fire/apirest-firebase)**