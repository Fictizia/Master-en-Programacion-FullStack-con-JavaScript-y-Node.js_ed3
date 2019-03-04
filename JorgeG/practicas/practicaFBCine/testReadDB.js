
var filmRef = firebase.database().ref(`films`);

// Cuando se añade un elemento
function leer () {
	filmRef.on('value', (snapshot) => {
    	snapshot.forEach((childSnapshot) => {
        	const element = childSnapshot.val();
        	console.log(element)
    	});
	});
}


function escribir (data) {
	filmRef.push(data)
}

function editar (id, data){
	filmRef.child(id).set(data)
}

function borrar (id){
	filmRef.child(id).remove()
}
