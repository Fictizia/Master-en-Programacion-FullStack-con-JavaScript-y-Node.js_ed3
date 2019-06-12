const express = require('express');
const { port } = require('./config')
const app = express();
const bodyParser = require('body-parser');
const {getFullFilmList, getMovieDetails, editMovieTitle, createMovie, deleteMovie} = require('./controllers/api')

app.use(express.static('public'))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.sendFile('./public/index.html')
})

app.get('/api/movies/:id', getMovieDetails)

app.get('/api/movies', getFullFilmList)

app.post('/api/movies', createMovie)

app.put('/api/movies', editMovieTitle)

app.delete('/api/movies', deleteMovie)


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
  })