
const { getAllFilmsDB, filmDetailsDB, createFilmDB, editFilmDetailsDB, deleteFilmDB } = require('../models/db')
const validator = require('validator')
const { getMovieData } = require('../lib/omdb')

function getAllMovies (req, res, next) {
  getAllFilmsDB()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
}

function getMovieDetails (req, res, next) {
  const id = req.params.id
  filmDetailsDB(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send({ err }))
}

function addNewMovie (req, res, next) {
  let { title } = req.body
  const isValidTitle = title && validator.isLength(title.trim(), { min: 1 })
  if (!isValidTitle) {
    return res.status(400).send({ err: 'Missing info!' })
  }
  getMovieData(title)
    .then(createFilmDB)
    .then(() => res.status(201).send({ message: 'Film created' }))
    .catch(err => res.status(500).send({ err }))
}

function editMovieDetails (req, res, next) {
  let { Title, id } = req.body
  const isValidTitle = Title && validator.isLength(Title.trim(), { min: 1 })
  const isValidId = id && validator.isLength(id.trim(), { min: 1 })
  if (!isValidTitle && !isValidId) {
    return res.status(400).send({ err: 'Missing info!' })
  }
  editFilmDetailsDB(id, Title)
    .then(() => res.status(200).send({ message: 'Film updated' }))
    .catch(err => res.status(500).send({ err }))
}

function deleteMovie (req, res, next) {
  let { id } = req.body
  const isValidId = id && validator.isLength(id.trim(), { min: 1 })
  if (!isValidId) {
    return res.status(400).send({ err: 'Missing info!' })
  }
  deleteFilmDB(id)
    .then(() => res.status(200).send({ message: 'Film deleted' }))
    .catch(err => res.status(500).send({ err }))
}

module.exports = { getAllMovies, getMovieDetails, editMovieDetails, addNewMovie, deleteMovie }
