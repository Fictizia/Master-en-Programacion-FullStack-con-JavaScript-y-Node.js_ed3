const got = require('got')
const {omdbKey} = require('./config');

function gotMovieInfo (title){
    const url = `http://www.omdbapi.com/?i=${title}&apikey=${omdbKey}`;
    return got(url)
    .then(res => JSON.parse(res.body))
}

module.exports = { gotMovieInfo }