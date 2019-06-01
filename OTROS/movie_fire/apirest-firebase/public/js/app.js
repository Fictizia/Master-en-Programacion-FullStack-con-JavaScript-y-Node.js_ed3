const inputSelector = document.getElementById("movieName");
const listSelector = document.getElementById("favMovies");
const detailsSelector = document.getElementById('movieDetails');

function ajaxResquest(config = {}, data){
	return new Promise((resolve, reject) => {
		console.log("config", config)
		console.log("data", data)
		const requestDetails = {
		  method: config.method
		}
		
		if(data) {
			requestDetails.body = JSON.stringify(data);
		}
		fetch(config.url, requestDetails)
			.then(res => res.json())
			.then(resolve)
			.catch(reject)
	})
}

function getFilmDetails(id){
	return ajaxResquest({url: `/api/films/${id}`, method: "GET"})
}

function getFilms(){
	return ajaxResquest({url: "/api/films", method: "GET"})
}


function addFilm(name){
	return ajaxResquest({url: "/api/films", method: "POST"},  {name})
}


function updateFilm(id, name){
	return ajaxResquest({url: "/api/films", method: "PUT"},  {name, id})
}

function deleteFilm (id) {
	return ajaxResquest({url: "/api/films", method: "DELETE"},  {id})
}



function filmTpl (filmDetails) {
	return `<li data-key="${filmDetails.id}">
		${filmDetails.name} [<span class="action" data-action="details">Details</span> | 
		 <span class="action" data-action="edit">Edit</span> | 
		 <span class="action" data-action="delete">Delete</span> ]
	</li>`;
}

function errorManagement(err){
	console.log("err:", err)
	listSelector.innerHTML = "<h1>All is Broken!!</h1>"
}

function updateUI(list) {
	listSelector.innerHTML = list.map(filmTpl).join('') || '<li>No films yet...</li>';
}


function refresh (promise){
	promise = promise ? promise.then(getFilms) : getFilms()

	promise
		.then(updateUI)
		.catch(errorManagement);
}

function hideDetails () {
	detailsSelector.innerHTML = "";
	detailsSelector.style.display = 'none';
}


function del (key) {
    const response = confirm(`Are certain about removing this film from the list?`);
    if (response) {
        refresh(deleteFilm(key));
        hideDetails();
    }
}

function edit (key) {
	const movieName = prompt("Update the movie name:");
	if (movieName){
		refresh(updateFilm(key, movieName))
	}
}


function filmDetailsTpl (filmDetails) {
	let poster = "";
	
	if(filmDetails.poster && filmDetails.poster  !== "N/A"){
		poster = `<img src="${filmDetails.poster}">`
	}

	return `<p><b>${filmDetails.title}</b><p>
	<span class="action" onclick="hideDetails()">[Close]</span>
	${poster}
	<p>Title: ${filmDetails.title}</p>
	<p>Director: ${filmDetails.director}</p>
	<p>Year: ${filmDetails.year}</p>
	<p>Actors: ${filmDetails.actors}</p>
	<p>Genre: ${filmDetails.genre}</p>
	<p>Country: ${filmDetails.country}</p>
	<p>Plot: ${filmDetails.plot}</p>`;
}


function details (key) {
	getFilmDetails(key)
		.then(data => {
			detailsSelector.innerHTML = filmDetailsTpl(data);
			detailsSelector.style.display = 'block';
		})
}




inputSelector.addEventListener("keyup", event => {
	if (event.which == 13 || event.keyCode == 13) {
		const movieName = inputSelector.value.trim();
        if (movieName.length > 0) {
        	inputSelector.value = '';
        	refresh(addFilm(movieName));
        }
	}
});


listSelector.addEventListener("click", event => {
	const target = event.target.getAttribute("data-action");
	const key = event.target.parentElement.getAttribute("data-key");
	if(target === "delete") {
		del(key)
	} else if (target === "edit"){
		edit(key)
	} else if (target === "details") {
		details(key)
	}
});

//Let's start!
refresh();