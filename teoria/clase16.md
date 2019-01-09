![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 16

### ¿Cómo navegamos por internet?

![img](../assets/clase16/b7aca40b-ae39-4320-9943-f472ff4a6e29.png)

- [How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)
- Internet es la `red de redes`.
- Son muchos los factoes que intervienen en que internet funcione
- En su base tu ordenador (cliente) se comunica con otro ordenador (servidor)
- Y se establece un dialogo por pasos (peticion y respuesta)

**Recursos**
- [How Does the Internet Actually Work?](https://www.youtube.com/watch?v=ZonvMhT5c_Q)
- [Inside a Google data center](https://www.youtube.com/watch?v=XZmGGAbHqa0)
- [La HISTORIA de INTERNET #DiaDeInternet - Drawing Things](https://www.youtube.com/watch?v=mGG5o6vbKyQ)
- [How It Works: Internet of Things](https://www.youtube.com/watch?v=QSIPNhOiMoE)


### ¿Cómo funciona el protocolo HTTP?

**[Especificación de HTTP](https://tools.ietf.org/html/rfc2616#section-10)**

**Partes de una comunicación**

![img](../assets/clase16/f82a48a6-611d-47d7-b31a-ee25f6f960d5.png)


**Petición HTTP Típica**

![img](../assets/clase16/6d60b775-f25a-4a76-b6ea-028653ea2b71.png)


**Respuesta HTTP Típica**

![img](../assets/clase16/abfade23-26a8-46ac-997b-2a80979323fc.png)


**HTTP y sus códigos**
[Lista de respuestas HTTP](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)
- Por tipología:
  - 1xx Informativas
  - 2xx Peticiones Correctas
  - 3xx Redirecciones
  - 4xx Errores Cliente
  - 5xx Errores Servidor

### ¿Cómo funciona el protocolo SSL/TLS?

![img_ssl](../assets/clase16/e858a35e-7f30-4b47-adcf-06fdcf94f319.png)

**Recursos**
- [HakTip - How to Capture Packets with Wireshark - Getting Started](https://www.youtube.com/watch?v=6X5TwvGXHP0)
- [Are HTTP Websites Insecure?](http://blog.securitymetrics.com/2014/08/are-http-websites-insecure.html)
- [From July, Chrome will name and shame insecure HTTP websites](https://www.theregister.co.uk/2018/02/08/google_chrome_http_shame/)
- [Google Chrome: HTTPS or bust. Insecure HTTP D-Day is tomorrow, folks](https://www.theregister.co.uk/2018/07/23/https_dday_google_chrome/)
- [Steal My Login](http://www.stealmylogin.com/)
- [Google Chrome to Label Sites Using HTTP as Insecure Starting in July](http://www.eweek.com/security/google-chrome-to-label-sites-using-http-as-insecure-starting-in-july)
- [Firefox 59: mark HTTP as insecure](https://www.ghacks.net/2017/12/14/firefox-59-mark-http-as-insecure/)

### ¿Qué es AJAX?


![Ajax comparación](../assets/clase16/0937e446-f1ce-4d41-a729-b2c6cbd1f39d.jpeg)


**Recursos**
- [A gentle Introduction to Ajax](https://codeburst.io/a-gentle-introduction-to-ajax-1e88e3db4e79)
- [AJAX Basics Explained By Working At A Fast Food Restaurant](https://blog.codeanalogies.com/2018/01/15/ajax-basics-explained-by-working-at-a-fast-food-restaurant/)

### AJAX: En la práctica

**Con Jquery**

```javascript
function peticionJqueryAjax (url) {

    $.ajax({
        dataType: "json",
        url: url,
    })
     .done(function( data, textStatus, jqXHR ) {
         console.log( "La solicitud se ha completado correctamente:", data );
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         console.log( "La solicitud a fallado:", textStatus);
    });

}

peticionJqueryAjax ("<---URL---->");
```

**Vanilla JS**

- *readyState*:
    - 0 es *uninitialized*
    - 1 es *loading*
    - 2 es *loaded*
    - 3 es *interactive*
    - 4 es *complete*

```javascript
function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

peticionAjax("<---URL---->");
```

### JSON
- Todo puede ser convertido a JSON y decodificado de vuelta
- Pero debe estar dentro de esta [especificacion ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)
- `JSON.parse()`: Analiza la cadena y retorna los valores
- `JSON.stringify()`: Analiza los valores y retorna una cadena 

```javascript

var dato = {
    "nombre": "Ulises",
    "Saludar": function () {console.log("Hola!")},
    "profe": true,
    "extras": undefined
}

var datoJSON = JSON.stringify(dato); //string -> "{"nombre":"Ulises","profe":true}"
var datoRecuperado = JSON.parse(datoJSON); //object -> {"nombre":"Ulises","profe":true}
```

**Recursos**
- [JSON en Wikiwand](http://www.wikiwand.com/es/JSON)
- [MDN | JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN | JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [Validador: jsonformatter](https://jsonformatter.curiousconcept.com/)
- [Visor: jsonviewer](http://jsonviewer.stack.hu/)


### Trabajando con APIs y CRUD

**APIs**
> Una API es una interfaz de programación de aplicaciones (del inglés API: Application Programming Interface). Es un conjunto de rutinas que provee acceso a funciones de un determinado software.
> Son publicadas por los constructores de software para permitir acceso a características de bajo nivel o propietarias, detallando solamente la forma en que cada rutina debe ser llevada a cabo y la funcionalidad que brinda, sin otorgar información acerca de cómo se lleva a cabo la tarea. Son utilizadas por los programadores para construir sus aplicaciones sin necesidad de volver a programar funciones ya hechas por otros, reutilizando código que se sabe que está probado y que funciona correctamente. [Wikipedia](https://es.wikipedia.org/wiki/Web_API)

**CRUD**

![CRUD](../assets/clase16/72391133-582d-4d01-96e3-5ddcb29b8852.png)

> En informática, CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar" (del original en inglés: Create, Read, Update and Delete), que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software. [Wikipedia](https://es.wikipedia.org/wiki/CRUD)

- Create:
  - Method (POST):
    - Respuesta 200 - OK
    - Respuesta 204 - Sin contenido
    - Respuesta 404 - No encontrado
    - Respuesta 409 - Conflicto, ya existe
- Read:
  - Method (GET):
    - Respuesta 200 - OK
    - Respuesta 404 - No encontrado
- Update:
  - Method (PUT):
    - Respuesta 200 - OK
    - Respuesta 204 - Sin contenido
    - Respuesta 404 - No encontrado
- Delete:
  - Method (DELETE):
    - Respuesta 200 - OK
    - Respuesta 404 - No encontrado

**REST: Transferencia de Estado Representacional**
> La transferencia de estado representacional (en inglés representational state transfer) o REST es un estilo de arquitectura software para sistemas hipermedia distribuidos como la World Wide Web. El término se originó en el año 2000, en una tesis doctoral sobre la web escrita por Roy Fielding, uno de los principales autores de la especificación del protocolo HTTP y ha pasado a ser ampliamente utilizado por la comunidad de desarrollo. [Wikipedia](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional)

![img](../assets/clase16/5446f5f8-00ed-44cb-ac54-743e5f8f6ca7.txt)

**APIs: Ejemplos de documentación**
- [API RTVE](https://github.com/UlisesGascon/RTVE-API)
- [MARVEL Doc](https://developer.marvel.com/docs)

**APIs: Listados**
- [Public APIs](https://github.com/toddmotto/public-apis)
- [programmableweb - List](https://www.programmableweb.com/apis/directory)
- [Open APIs Wikipedia](https://en.wikipedia.org/wiki/List_of_open_APIs)
- [apilist.fun](http://apilist.fun/)

**APIs: Interesantes**
- [Shodan](https://www.shodan.io/)
- [pokeapi](http://pokeapi.co/)
- [Open Weather Map](http://openweathermap.org/)
- [Fitbit](https://dev.fitbit.com/eu)
- [Marvel](http://developer.marvel.com/)
- [SWAPI - The Star Wars API](https://swapi.co/)
- [reddit](https://www.reddit.com/dev/api)
- [Deck of Cards - API](http://deckofcardsapi.com/)
- [TheTVDB API v2](https://api-beta.thetvdb.com/swagger#/)
- [Twitter Streaming](https://dev.twitter.com/streaming/overview)
- [Guild Wars 2](https://api.guildwars2.com/v2)
- [Nutritionix API](https://www.nutritionix.com/business/api)

### CORS: Control de acceso HTTP

![img](../assets/clase16/202d905c-879a-445d-86a0-8eb37106b571.png)

> El Intercambio de Recursos de Origen Cruzado (CORS) es un mecanismo que utiliza encabezados adicionales HTTP para permitir que un user agent obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio), al que pertenece. Un agente crea una petición HTTP de origen cruzado cuando solicita un recurso desde un dominio distinto, un protocolo o un puerto diferente al del documento que lo generó. [MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)

**Recursos**
- [Understanding CORS](https://medium.com/@baphemot/understanding-cors-18ad6b478e2b)
- [CORS Wikiwand](https://www.wikiwand.com/en/Cross-origin_resource_sharing)
- [Tutorial CORS](http://www.html5rocks.com/en/tutorials/cors/)
- [Using CORS by html5rocks](https://www.html5rocks.com/en/tutorials/cors/)
- [Control de acceso HTTP (CORS) by MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)
- [Cross-origin resource sharing en Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [Enable cross-origin resource sharing](https://enable-cors.org/)
- [crossorigin.me (Proxy)](https://crossorigin.me/)

### PROXY

![img](../assets/clase16/ff98d1ec-3309-4723-896f-ef47508adf86.jpeg)

**Proxy Free Online**
- [cors-anywhere](http://cors-anywhere.herokuapp.com/)
- [crossorigin.me](https://corsproxy.github.io/)

**Nodejs**
```javascript
// Crea un fichero: server.js
// En la terminal: npm install express request && node server.js
var express = require('express');
var request = require('request');
var app = express();
var path = require('path');

// Static files
app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/proxy', function (req, res){
    // @Example: localhost:8080/proxy?url=http://airemad.com/api/v1/station/
    // CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    // PIPE Response
    request({  
        url: req.query.url,
        method: req.query.method || "GET"
    }).pipe(res)
});

app.listen(8080);
```

### JSONP

![img](../assets/clase16/f11e14a6-b1a6-4c55-a0f0-365a667834e2.png)

![img](../assets/clase16/9794a5ed-35a3-4b5c-b223-38c71831d0cb.html)

- json (formato)
```javascript
{ foo: 'bar' }
```
- callback (cliente)
```javascript
mycallback = function(data){
  alert(data.foo);
};
```
  
- peticion (cliente)
```javascript
var url = "http://www.example.net/sample.aspx?callback=mycallback";
```
  
- respuesta (servidor)
```javascript
mycallback({ foo: 'bar' });
```

- Ejemplo de CORS y JSONP con [php de formandome](http://www.formandome.es/javascript/cors-vs-jsonp-solicitudes-ajax-entre-dominios/)
```php
<?php
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");
 
//Cadena de conexión:
$connect = mysql_connect("localhost", "usuario", "pwd")
or die('Could not connect: ' . mysql_error());
 
//seleccionamos bbdd:
$bool = mysql_select_db("database", $connect);
if ($bool === False){
   print "No puedo encontrar la bbdd: $database";
}
 
//inicializamos el cliente en utf-8:
mysql_query('SET names utf8');

$query = "SELECT * FROM futbolistas";
 
$result = mysql_query($query) or die("SQL Error: " . mysql_error());
$data = array();
// obtenemos los datos:
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = array(
        'id' => $row['id'],
        'nombre' => $row['nombre'],
        'apellido' => $row['apellido'],
        'posicion' => $row['posicion'],
        'equipo' => $row['equipo'],
        'dorsal' => $row['dorsal'],
        'desc' => $row['desc'],
	'imagen' => $row['imagen']
      );
}
 
//codificamos en json:
$json = json_encode($data);
 
//enviamos json o jsonp según venga o no una función de callback:
echo isset($_GET['callback'])
    ? "{$_GET['callback']}($json)"
    : $json;
?>
```

- Ejemplo con [Nodejs](http://expressjs.com/api.html#res.jsonp)
```javascript
var express = require('express');
var app = express();

app.get('/endpointJSON', function(req, res){
    console.log('JSON response');
    console.log(req.query);
    res.json(req.query);
});
 
app.listen(3000);
```


Soporte en cliente (librerías):
- Jquery:
  ```javascript
    // Using YQL and JSONP
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            q: "select title,abstract,url from search.news where query=\"cat\"",
            format: "json"
        },
        success: function( response ) {
            console.log( response ); // server response
        }
    });  
  ```

**Librerías**
- [jsonp.js de Przemek Sobstel](https://github.com/sobstel/jsonp.js/blob/master/jsonp.js)
- [J50Npi.js de Roberto Decurnex](https://github.com/robertodecurnex/J50Npi/blob/master/J50Npi.js)

**Recursos**
- [Is JSONP safe to use?](https://stackoverflow.com/questions/613962/is-jsonp-safe-to-use)
- [Using JSONP Safely](https://www.metaltoad.com/blog/using-jsonp-safely)
- [Practical JSONP Injection](https://securitycafe.ro/2017/01/18/practical-jsonp-injection/)
- [JSONP for cross-site Callbacks](https://weblog.west-wind.com/posts/2007/Jul/04/JSONP-for-crosssite-Callbacks)
- [(in)Security of JSONP: CSRF risks](https://phocean.net/2013/10/13/csrf-with-jsonp.html)

### Ejercicios

**1 -** Sacar en el html los [datos de polen](http://airemad.com/api/v1/pollen).

```javascript
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {

  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      var datos = (JSON.parse(xmlHttp.responseText));

      var contenido = "";
      datos.forEach(function(estacion) {
          contenido += "<h1>" + estacion.name + " (" + estacion.id + ")</h1>"
          contenido += "<ul>"

          for (var medicion in estacion.mediciones) {
              contenido += "<li>" + medicion + ": <i>" + estacion.mediciones[medicion]["resumen"] + "</i></li>"
          }

          contenido += "</ul>"
      })
      document.body.innerHTML = contenido;
  } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
      console.error("ERROR! 404");
      console.info(JSON.parse(xmlHttp.responseText));
  }
};

xmlHttp.open("GET", "http://airemad.com/api/v1/pollen", true);
xmlHttp.send();
```

**2 -** Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. 
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401


```javascript
	var contenido = "";
  	function temperaturaCiudad (ciudad) {
        var xmlHttp = new XMLHttpRequest(),
        APIKey = '', // Puedes usar una cuenta gratuita -> http://openweathermap.org/price
        cURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&APPID='+APIKey;
    
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos = (JSON.parse(xmlHttp.responseText));
	              contenido += "<h1>"+datos.name+"</h1>"
	              contenido += "<p>"+datos.weather[0].description+"</p>"
	              document.body.innerHTML = contenido;
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                datos = JSON.parse(xmlHttp.responseText);
                console.error("ERROR! 404");
                console.info(datos);
            }
        };
    
        xmlHttp.open( "GET", cURL, true );
        xmlHttp.send();
    }
    
    temperaturaCiudad("Madrid");
    temperaturaCiudad("Barcelona");
    temperaturaCiudad("Valencia");
```

**3 -** Jugando con [datos abiertos](http://datos.gob.es/), saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.


```javascript
    function peticionAjax (url) {
	  var xmlHttp = new XMLHttpRequest();
	
	            xmlHttp.onreadystatechange = function () {
	
	                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
	                    var datos = (JSON.parse(xmlHttp.responseText));
                        console.log(datos)
	                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
	                    console.error("ERROR! 404");
	                    console.info(JSON.parse(xmlHttp.responseText));
	                }
	            };
	
	            xmlHttp.open( "GET", url, true );
	            xmlHttp.send();
	}
    
	peticionAjax("http://opendata.gijon.es/descargar.php?id=163&tipo=JSON");
```

```
// Podemos encontrar errores en las respuestas.
// cuadromando[5] ...

    calle: "Faustina &#193;lvarez Garc&#237;a"
    latitud: 43.526376045
    longitud: -5.685764873
    numero: ""
    potencia_w_: 17321

// ...
```