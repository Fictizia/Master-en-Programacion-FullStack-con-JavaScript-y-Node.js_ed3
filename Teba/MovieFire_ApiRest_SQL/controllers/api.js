// Require de las funciones de la DB
// Validator
const gotMovieInfo = require('.lib/omdb')


function getFullFilmList(req, res, next){
    res.json([{
        id: '001',
        Title: 'The Matrix'
    }, 
    {
        id: '002',
        Title: 'Banana'
    }
    ])
}

function getMovieDetails (req, res, next){
    let id = req.params.id;
    console.log(`Mira los detalles de la peli ${id}!`)
    res.json({
        id,
        Title: 'The Matrix'
    })
}

function createMovie(req, res, next){
    let {title} = req.body;
    console.log(`Aquí creamos una peli con el título ${title}`);
    res.json({ 
        id: '001',
        Title: title
    })
}


function editMovieTitle(req, res, next){
    let newTitle = req.body.title;
    console.log(`Aquí editamos la peli con el nuevo titulo ${newTitle}`)
    res.json({
        id: '001',
        Title: newTitle
    })
}

function deleteMovie(req, res, next){
    let id = req.body.id;
    console.log(`Aquí borramos la peli con el id ${id}`)
    res.json({})
}

module.exports =  {getFullFilmList, getMovieDetails, editMovieTitle, createMovie, deleteMovie}