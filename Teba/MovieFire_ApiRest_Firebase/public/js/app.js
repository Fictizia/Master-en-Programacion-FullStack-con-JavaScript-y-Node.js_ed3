
// Selectors
const inputSlctr = document.getElementById('title')
const filmItemSlctr = document.getElementById('peliculas')
const detailsSlctr = document.getElementById('details')

// CRUD functions - create, read, update, delete
function addMovie (title) {
  const url = '/api/movies'
  const data = { title: title }
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
}

function filmList () {
  const url = '/api/movies'
  fetch(url)
    .then(r => r.json())
    .then(data => renderfilmList(data))
    .catch(error => console.error('Error:', error))
}

function getMovieDetails (id) {
  const url = `/api/movies/${id}`
  fetch(url)
    .then(r => r.json())
    .then(data => renderFilmInfo(data))
    .catch(error => console.error('Error:', error))
}

function editMovieDetails (id, newTitle) {
  const url = '/api/movies'
  const data = {
    Title: newTitle,
    id: id
  }
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
}

function deleteMovie (id) {
  const url = '/api/movies'
  const data = { id: id }
  return fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
}

// Rendering functions
function renderfilmList (data = []) {
  let htmlContent = data.map(film => {
    return `<li data-id="${film.id}" >${film.Title}
    <button type="button" data-action="details" class="nes-btn is-success">Details</button>
    <button type="button" data-action="edit" class="nes-btn is-warning">Edit</button>
    <button type="button" data-action="delete" class="nes-btn is-error">Delete</button>
    </li>`
  }).join('')
  filmItemSlctr.innerHTML = htmlContent
}

function renderFilmInfo (data) {
  detailsSlctr.innerHTML = `<ul>
          <li>Actors: ${data.Actors}</li>
          <li>Director: ${data.Director}</li>
          <li>Genre: ${data.Genre}</li>
          <li>Plot: ${data.Plot}</li>
      </ul>`
}

filmList()

// Eventos

inputSlctr.addEventListener('keypress', (evt) => {
  if (evt.keyCode === 13) {
    let movieTitle = inputSlctr.value
    addMovie(movieTitle)
      .then(filmList)
    inputSlctr.value = ''
  }
})

filmItemSlctr.addEventListener('click', (evt) => {
  let action = event.target.dataset.action
  if (evt.target.nodeName === 'BUTTON' && action) {
    let filmId = event.target.parentNode.dataset.id
    if (action === 'details') {
      getMovieDetails(filmId)
    } else if (action === 'edit') {
      let newTitle = prompt('Escribe el nuevo título de la peli')
      if (newTitle) {
        editMovieDetails(filmId, newTitle)
          .then(filmList)
      }
    } else if (action === 'delete') {
      if (confirm('Deseas borrar esta peli?')) {
        deleteMovie(filmId)
          .then(filmList)
      }
    }
  }
})
