const { getMovieDetailsDB, getAllMoviesDB, editMovieDB, createMovieDB, deleteMovieDB} = require('../models/db')
// @TODO: Validator
const {gotMovieInfo} = require('../lib/omdb')


function getFullFilmList(req, res, next){
    getAllMoviesDB()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({err}))
}

function getMovieDetails (req, res, next){
    let id = req.params.id;
    getMovieDetailsDB(id)
        .then(data => res.json(data))
        .catch(error => res.status(500).json({error}))
}

function createMovie(req, res, next){
    let {title} = req.body;
    gotMovieInfo(title)
        .then(createMovieDB) 
        .then(data => res.json({msg: 'Movie has been created'}))
        .catch(error => res.status(500).json({error}))
}

function editMovieTitle(req, res, next){
    let newTitle = req.body.title;
    let id = req.body.id;
    editMovieDB(id, newTitle)
        .then(data => res.json({msg: 'Movie has been updated!'}))
        .catch(error => res.status(500).json({error}))
}

function deleteMovie(req, res, next){
    let id = req.body.id;
    deleteMovieDB(id)
        .then(data => res.json({msg: 'Movie has been deleted!'}))
        .catch(error => res.status(500).json({error}))
}

module.exports =  {getFullFilmList, getMovieDetails, editMovieTitle, createMovie, deleteMovie}