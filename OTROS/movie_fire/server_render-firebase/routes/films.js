const filmModel = require('../models/films');

exports.getAllFilms = (req, res) => {
    filmModel.getAll()
        .then(data => res.render('index.pug', {data}))
        .catch(err => res.status(500).render('error.pug', err));
};

exports.getFilm = (req, res) => {
    const id = req.params.id;
    filmModel.get(id)
        .then(data => {
            if(data){
                res.render('details.pug', {data});
            } else {
                res.status(500).render('error.pug');
            }
        })
        .catch(err => res.status(500).render('error.pug', err));
};

exports.createFilm = (req, res) => {
    const name = req.params.name;
    filmModel.create(name)
        .then(data => res.redirect('/'))
        .catch(err => res.status(500).render('error.pug', err));
};

exports.destroyFilm = (req, res) => {
    const id = req.params.id;
    filmModel.remove(id)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).render('error.pug', err));
};

exports.updateFilm = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;

    filmModel.update(id, name)
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).render('error.pug', err));
};