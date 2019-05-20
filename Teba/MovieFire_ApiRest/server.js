const express = require('express')
const firebase = require('firebase')
const { port } = require('./config')
const { getAllMovies, getMovieDetails } = require('./controllers/api')
const { pushFilmDB, filmDetailsDB, editFilmDetailsDB, deleteFilmDB } = require('./models/films')
const app = express()
const db = firebase()
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator/check')

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('./public/index/html')
})

app.get('/api/movies', getAllMovies)

app.get('/api/movies/:id', getMovieDetails)

// TODO: propagar esto al resto (no sé cómo hacerlo en post, put, delete)
app.post('/api/movies', [
  check('title').isLength({ min: 1 }).trim()
], (req, res, next) => {
  let title = req.body.title
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: 'Missing info!' })
  } else {
    res.status(200).send({ title })
  }
})

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
