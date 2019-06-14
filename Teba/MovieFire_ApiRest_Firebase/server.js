const express = require('express')
const { port } = require('./config')
const { getAllMovies, getMovieDetails, editMovieDetails, addNewMovie, deleteMovie } = require('./controllers/api')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

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
