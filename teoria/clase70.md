![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 70

### ¡Live Coding! :muscle:


**1 -** Migra la aplicación de MovieFire para hacer server render con Nodejs y Pug

Claves:
- Puedes usar librerías como `request`, `pug`, `morgan`, `helmet`, `firebase`...
- :warning: reutilizaremos este ejercicio en el futuro con otras bases de datos, asi que intentan aislar y abstraer la conexión a la base de datos ;-)

Plantillas:
- `index.pug` para el listado general de películas
- `details.pug` para los detalles de una película
- `error.pug` para mostrar errores

Rutas:
- `[GET] /` Muestra todas las películas
- `[GET] /create/:name` Crea una pelicula
- `[GET] /film/:id` Muestra los detalles de una película en concreto
- `[POST] /film/:id/delete` Borra una película
- `[POST] /film/:id/update` Actualiza el nombre de una película

Estructura de datos por película:
```json
{
  "details" : {
    "Actors" : "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
    "Awards" : "Nominated for 3 Oscars. Another 45 wins & 91 nominations.",
    "BoxOffice" : "$381,000,185",
    "Country" : "USA, UK",
    "DVD" : "11 Nov 2011",
    "Director" : "David Yates",
    "Genre" : "Adventure, Drama, Fantasy, Mystery",
    "Language" : "English",
    "Metascore" : "87",
    "Plot" : "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "Poster" : "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    "Production" : "Warner Bros. Pictures",
    "Rated" : "PG-13",
    "Ratings" : [ {
      "Source" : "Internet Movie Database",
      "Value" : "8.1/10"
    }, {
      "Source" : "Rotten Tomatoes",
      "Value" : "96%"
    }, {
      "Source" : "Metacritic",
      "Value" : "87/100"
    } ],
    "Released" : "15 Jul 2011",
    "Response" : "True",
    "Runtime" : "130 min",
    "Title" : "Harry Potter and the Deathly Hallows: Part 2",
    "Type" : "movie",
    "Website" : "http://www.HarryPotter.com/",
    "Writer" : "Steve Kloves (screenplay), J.K. Rowling (novel)",
    "Year" : "2011",
    "imdbID" : "tt1201607",
    "imdbRating" : "8.1",
    "imdbVotes" : "673,121"
  },
  "name" : "harry potter"
}
```



```js
// Tu solución
```


**2 -** Mejora MovieFire
Objetivos:
- Unifica la estructura de datos (quita `details`) y normaliza las propiedades (sin capitalización)
- Usa Bootstrap e [includes](https://pugjs.org/language/includes.html) de Pug
- Manten una buena estructura separando rutas y modelos, puedes usar `async/await` para simplificar el trabajo

```js
// Tu solución
```