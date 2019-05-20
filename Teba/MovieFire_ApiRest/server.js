const express = require('express')
// const firebase = require('firebase');
const { port } = require('./config')
const { getAllMovies, getMovieDetails } = require('./controllers/api')
// const {pushFilmDB,  filmDetailsDB, editFilmDetailsDB, deleteFilmDB} = require('./models/films')
const app = express()
// const db = firebase();
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator/check')
const validator = require('validator')


/* ---- @TODO ----
- [ ] Eliminar express-validator/check por validator normal.
- [ ] Mover el middelware de las rutas a ./controllers/api
- [ ] firebase solo puede existir en ./models/films
- [ ] fetch no existe en Node! ver ./models/films
- [ ] './controllers/api' deberia importarse './models/films' para hacer que las rutas sean realmente dinámicas
- [ ] Desarrollar el gestor de OMBD para sacar más info de las películas desde el title en ./lib/ombd.js, puedes usar got (Npm), request (Npm) o request-promise (Npm) 
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

app.post('/api/movies', (req, res, next) => {
  // heck('title').isLength({ min: 1 }).trim()
  let title = req.body.title
  const isValidTitle = validator.isLength(title.trim(), { min: 1 })
  // Finds the validation errors in this request and wraps them in an object with handy functions
  //const errors = validationResult(req)
  if (!isValidTitle) {
    return res.status(400).send({ errors: 'Missing info!' })
  } else {
    res.status(200).send({ title })
  }
})

// TODO: propagar esto al resto (no sé cómo hacerlo en post, put, delete)
app.put('/api/movies', [
  check('title').isLength({ min: 1 }).trim(),
  check('id').isLength({ min: 1 }).trim()
], (req, res, next) => {
  let { title, id } = req.body
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: 'Missing info!' })
  } else {
    res.status(200).send({ title, id })
  }
})

app.delete('/api/movies', [
  check('id').isLength({ min: 1 }).trim()
], (req, res, next) => {
  let id = req.body.id
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: 'Missing info!' })
  } else {
    res.status(200).send({ id })
  }
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
