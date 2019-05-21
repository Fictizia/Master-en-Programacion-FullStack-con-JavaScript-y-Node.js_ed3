
const { getAllFilmsDB, filmDetailsDB, createFilmDB, editFilmDetailsDB, deleteFilmDB } = require('../models/db')

function getAllMovies (req, res, next) {
  getAllFilmsDB()
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))  
}

function getMovieDetails (req, res, next) {
  res.json({ id: req.params.id })
}

function editMovieDetails (req, res, next) {
  let title = req.body.title
  const isValidTitle = title && validator.isLength(title.trim(), { min: 1 })
  if (!isValidTitle) {
    return res.status(400).send({ errors: 'Missing info!' })
  } else {
    res.status(200).send({ title })
  }
}

function addNewMovie (req, res, next) {
  let { title, id } = req.body;
  const isValidTitle = title && validator.isLength(title.trim(), { min: 1 })
  const isValidId = id && validator.isLength(id.trim(), { min: 1 })
  if (!isValidTitle && !isValidId) {
    return res.status(400).send({ errors: 'Missing info!' })
  } else {
    res.status(200).send({ title, id })
  }
}

function deleteMovie (req, res, next) {
  let id = req.body.id;
  const isValidId = id && validator.isLength(id.trim(), { min: 1 })
  if (!isValidId) {
    return res.status(400).send({ errors: 'Missing info!' })
  } else {
    res.status(200).send({ id })
  }
}

module.exports = { getAllMovies, getMovieDetails, editMovieDetails, addNewMovie, deleteMovie }
