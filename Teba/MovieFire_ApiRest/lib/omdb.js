const got = require('got')
const { apiKeyOmdb } = require('../config')

function getMovieData (title) {
  const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKeyOmdb}`
  return got(url)
    .then(res => JSON.parse(res.body))
}

module.exports = { getMovieData }
