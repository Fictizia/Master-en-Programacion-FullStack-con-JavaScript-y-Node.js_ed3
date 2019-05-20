const moviesRef = firebase.database().ref('/peliculas')
const apiKey = 'Tu token'

// CRUD - create, read, update, delete

function getMoviesDataDB (title) {
  const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`
  return fetch(url)
    .then(res => res.json())
}

function pushFilmDB (data) {
  return moviesRef.push(data)
}

function filmDetailsDB (id) {
  return moviesRef.child(id).once('value', (snapshot) => {
    const data = snapshot.val()
  })
}

function editFilmDetailsDB (id, newTitle) {
  return moviesRef.child(id).update({
    Title: newTitle
  })
}

function deleteFilmDB (id) {
  return moviesRef.child(id).remove()
}

module.exports = { pushFilmDB, filmDetailsDB, editFilmDetailsDB, deleteFilmDB }
