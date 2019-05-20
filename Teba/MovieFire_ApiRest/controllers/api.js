
function getAllMovies (req, res, next) {
  res.json([{ id: '01' }, { id: '02' }])
}

function getMovieDetails (req, res, next) {
  res.json({ id: req.params.id })
}

module.exports = { getAllMovies, getMovieDetails }
