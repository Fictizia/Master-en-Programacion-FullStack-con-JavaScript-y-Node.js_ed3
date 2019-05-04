(() => {
	// Selectors
	const moviesRef = firebase.database().ref('/peliculas');
	const apiKey = "Tu token";
	const inputSlctr = document.getElementById('title');
	const filmItemSlctr = document.getElementById('peliculas');
	const detailsSlctr = document.getElementById('details');
	const deletePopup = document.getElementById('dialog-delete');

	//CRUD - create, read, update, delete

	function getMoviesData(title) {
		const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
		return fetch(url)
			.then(res => res.json())
	}

	function addMovie(data) {
		return moviesRef.push(data);
	}

	function getMovieDetails(id) {
		return moviesRef.child(id).once('value', (snapshot) => {
			const data = snapshot.val();
			detailsSlctr.innerHTML = `<ul>
            <li>Actors: ${data.Actors}</li>
            <li>Director: ${data.Director}</li>
            <li>Genre: ${data.Genre}</li>
            <li>${data.Plot}</li>
        </ul>`
		})
	}

	function editMovieDetails(id, newTitle) {
		return moviesRef.child(id).update({
			Title: newTitle
		})
	}

	function deleteMovie(id) {
		return moviesRef.child(id).remove()
	}

	function filmList(data = []) {
		let htmlContent = "";
		for (const key in data) {
			htmlContent += `<li data-id="${key}" >${data[key].Title}
            <button type="button" data-action="details" class="nes-btn is-success">Details</button>
            <button type="button" data-action="edit" class="nes-btn is-warning">Edit</button>
            <button type="button" data-action="delete" class="nes-btn is-error">Delete</button>
            </li>`
		}
		filmItemSlctr.innerHTML = htmlContent;
	}

	// Eventos

	moviesRef.on('value', (snapshot) => {
		filmList(snapshot.val());
		detailsSlctr.innerText = '';
	})

	inputSlctr.addEventListener('keypress', (evt) => {
		if (evt.keyCode === 13) {
			let movieTitle = inputSlctr.value;
			getMoviesData(movieTitle)
				.then(addMovie)
			inputSlctr.value = '';
		}
	})

	filmItemSlctr.addEventListener('click', (evt) => {
		let action = event.target.dataset.action;
		if (evt.target.nodeName === 'BUTTON' && action) {
			let filmId = event.target.parentNode.dataset.id;
			if (action === 'details') {
				getMovieDetails(filmId)
			} else if (action === 'edit') {
				let newTitle = prompt('Escribe el nuevo título de la peli');
				if (newTitle) {
					editMovieDetails(filmId, newTitle)
				}
			} else if (action === 'delete') {
				if (confirm('Deseas borrar esta peli?')) {
					deleteMovie(filmId)
				}
			}
		}
	})

})();

