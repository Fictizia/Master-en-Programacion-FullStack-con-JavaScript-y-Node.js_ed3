
function peticionAjax (url, cb) {
	  var xmlHttp = new XMLHttpRequest();
	
	            xmlHttp.onreadystatechange = function () {
	
	                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
	                    /*var datos = (JSON.parse(xmlHttp.responseText));
                        console.log(datos)*/
                        var datos;
                        datos.name = "nombre de prueba";
                        cb(datos)
                                   } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
	                    console.error("ERROR! 404");
	                    console.info(JSON.parse(xmlHttp.responseText));
	                }
	            };
	
	            xmlHttp.open("POST", url, true );
	            xmlHttp.send();
              
    }
    
//Main Program
console.log("Hola!");
peticionAjax("https://practicafbcine.firebaseio.com", function(data){
    console.log("Los datos son: ", data);
});