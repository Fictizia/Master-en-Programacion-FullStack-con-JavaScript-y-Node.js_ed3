const express = require('express')
const { port } = require('./config')
const { getAllMovies, getMovieDetails, editMovieDetails, addNewMovie, deleteMovie } = require('./controllers/api')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

/* ---- @TODO ----
- [x] Eliminar express-validator/check por validator normal.
- [x] Mover el middelware de las rutas a ./controllers/api
- [x] firebase solo puede existir en ./models/db
- [x] fetch no existe en Node! Ver ./models/db
- [x] './controllers/api' deberia importarse './models/db' para hacer que las rutas sean realmente dinámicas
- [x] './controllers/api' deberia conectarse con './models/db'
- [x] Desarrollar el gestor de OMBD para sacar más info de las películas desde el title
      en ./lib/ombd.js, puedes usar got (Npm), request (Npm) o request-promise (Npm)
- [x] Limpiar/borrar/adaptar el front de /public o dejar vacío sin más que un HTML que explique la API
    - [x] Crear una copia de /public; 
    - [x] Mapear las funcionalidades de app.js
    - [x] Migrar las func. de app.js al nuevo app.js siguiendo el esquema de funciones y haciendo las llamadas a AJAX
- [x] Normalizacion: Devolver un array de peliculas y no un objeto con peliculas. 
- [x] Añadir CORS a las rutas de la /api/ directamente o con el middelware cors (Npm) y Helmet para seguridad
- [ ] Refactorizar todo y darle un último repasito
- [ ] Mejorar el Readme
- [ ] Normalizacion: OMBD data -> Title a title y cambio de comportamiento en el front
- [ ] Mejorar la gestión de errores con un middelware propio (Hablar con @Ulises)
*/

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
  res.sendFile('./public/index/html')
})

app.get('/api/movies/:id', getMovieDetails)

app.get('/api/movies', getAllMovies)

app.post('/api/movies', addNewMovie)

app.put('/api/movies', editMovieDetails)

app.delete('/api/movies', deleteMovie)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
