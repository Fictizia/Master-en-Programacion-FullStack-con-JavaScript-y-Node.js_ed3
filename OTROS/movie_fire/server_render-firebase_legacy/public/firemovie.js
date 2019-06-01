(()=>{

	const listSelector = document.getElementById("favMovies");
	const inputSelector = document.getElementById("movieName");
	
	listSelector.addEventListener("click", event => {
		const target = event.target.getAttribute("data-action");
		const key = event.target.parentElement.getAttribute("data-key");
		if(target === "delete") {
			del(key);
		} else if (target === "edit"){
			edit(key);
		} else if (target === "details") {
			details(key);
		}
	});
	
	inputSelector.addEventListener("keyup", event => {
		if (event.which == 13 || event.keyCode == 13) {
			const movieName = inputSelector.value.trim();
	        if (movieName.length > 0) {
	        	window.location.href = `/create/${movieName}`;
	        }
		}
	});
	
	function details (key) {
		window.location.href = `/film/${key}`;
	}
	
	function del (key) {
	    const response = confirm(`Are certain about removing this film from the list?`);
	    if (response) {
	    	fakeForm(`/film/${key}/delete`)
	    }
	}
	
	function edit (key) {
		const name = prompt("Update the movie name:");
		if (name){
			fakeForm(`/film/${key}/update`, {name});
		}
	}
	 
	 /**
	 * sends a request to the specified url from a form. this will change the window location.
	 * @see: https://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit
	 * @param {string} path the path to send the post request to
	 * @param {object} params the paramiters to add to the url
	 * @param {string} [method=post] the method to use on the form
	 */
	
	function fakeForm (path, params, method="post") {

	    const form = document.createElement("form");
	    form.setAttribute("method", method);
	    form.setAttribute("action", path);
	
	    for(var key in params) {
	        if(params.hasOwnProperty(key)) {
	            const hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", params[key]);
	
	            form.appendChild(hiddenField);
	        }
	    }
	
	    document.body.appendChild(form);
	    form.submit();
	}
	
	
})()
