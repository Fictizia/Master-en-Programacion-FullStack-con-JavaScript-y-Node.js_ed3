const express = require('express')
const { port } = require('./config')
const { getAllMovies, getMovieDetails, editMovieDetails, addNewMovie, deleteMovie } = require('./controllers/api')
const app = express();
const bodyParser = require('body-parser')
const validator = require('validator')


/* ---- @TODO ----
- [x] Eliminar express-validator/check por validator normal.
- [x] Mover el middelware de las rutas a ./controllers/api
- [x] firebase solo puede existir en ./models/db
- [x] fetch no existe en Node! Ver ./models/db
- [x] './controllers/api' deberia importarse './models/db' para hacer que las rutas sean realmente dinámicas
- [ ] Desarrollar el gestor de OMBD para sacar más info de las películas desde el title 
      en ./lib/ombd.js, puedes usar got (Npm), request (Npm) o request-promise (Npm) 
- [ ] Mejorar la gestión de errores con un middelware propio (Hablar con @Ulises)
- [ ] Añadir CORS a las rutas de la /api/ directamente o con el middelware cors (Npm)
- [ ] Limpiar/borrar/adaptar el front de /public o dejar vacío sin más que un HTML que explique la API
- [ ] Refactorizar todo y darle un último repasito
- [ ] Mejorar el Readme
*/

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('./public/index/html')
})

app.get('/api/movies/:id', getMovieDetails)

app.get('/api/movies', getAllMovies)

app.post('/api/movies', editMovieDetails)

app.put('/api/movies', addNewMovie)

app.delete('/api/movies', deleteMovie)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
