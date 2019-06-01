const filmModel = require('../models/films');

exports.getAllFilms = (req, res) => {
    filmModel.getAll()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({message: "error"}));
};

exports.getFilm = (req, res) => {
    const id = req.params.id;
    filmModel.get(id)
        .then(data => {
            if(data){
                res.json(data)
            } else {
                res.status(500).json({message: "error"});
            }
        })
        .catch(err => res.status(500).json({message: "error"}))
};

exports.createFilm = (req, res) => {
    const name = req.body.name;
    filmModel.create(name)
        .then(() => res.json({message: "success"}))
        .catch(err => res.status(500).json({message: "error"}))
};

exports.destroyFilm = (req, res) => {
    const id = req.body.id;
    filmModel.remove(id)
        .then(() => res.json({message: "success"}))
        .catch(err => res.status(500).json({message: "error"}))
};

exports.updateFilm = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;

    filmModel.update(id, name)
        .then(() => res.json({message: "success"}))
        .catch(err => res.status(500).json({message: "error"}));
};