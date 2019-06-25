const got = require('got')
const {omdbKey} = require('../config');

function gotMovieInfo (title){
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${omdbKey}`;
    return got(url)
    .then(res => {
        const dataRaw = JSON.parse(res.body)
        if(dataRaw.Error){
            return Promise.reject(dataRaw.Error)
        }
        const data = {}
        const properties = {
            "Actors": "actors", 
            "Awards": 'awards', 
            "Director": 'director', 
            "Genre": 'genre', 
            "imdbRating": 'imdbRating', 
            "Language": 'language', 
            "Plot": 'plot', 
            "Title": 'title', 
            "Year": 'year'
        }
        
        const dicProps = Object.keys(properties);        
        dicProps.forEach(prop => {
            data[properties[prop]] = dataRaw[prop]
        })
        
        return data
    })
}

module.exports = { gotMovieInfo }