### Ejercicios

**1 -** Saca una lista de los cursos disponibles en Fictizia en el [área de Desarrollo interactivo y Web](https://www.fictizia.com/planes/desarrollo-interactivo-y-web) y conviertelo en Markdown. 

- Respuesta esperada (consola):

```
# Cursos de Fictizia en el Área de Desarrollo interactivo y Web

- [Máster en Diseño de interfaz y Front-end con HTML5, CSS3 y jQuery (165 HORAS)](https://fictizia.com/formacion/master-interfaz-frontend-html5-css3-jquery)
- [Máster en Programación FullStack con JavaScript y Node.js (300 HORAS)](https://fictizia.com/formacion/master-javascript-nodejs)
- [Curso de Diseño de interfaz en proyectos Web, Apps y Smart TV (45 HORAS)](https://fictizia.com/formacion/curso-diseno-interfaz-web-apps-smart-tv)
- [Curso de UX y diseño de productos digitales (56 HORAS)](https://fictizia.com/formacion/curso-ux)
- [Curso de maquetación y animación Web con HTML5 y CSS3 (72 HORAS)](https://fictizia.com/formacion/curso-frontend-html5-css3)
- [Curso de jQuery para maquetadores web (36 HORAS)](https://fictizia.com/formacion/curso-programacion-jquery)
- [Curso de JavaScript para desarrolladores web (45 HORAS)](https://fictizia.com/formacion/curso-javascript)
- [Curso de JavaScript Avanzado para desarrolladores Front-end (72 HORAS)](https://fictizia.com/formacion/curso-javascript-avanzado)
- [Curso de Angular (v6.x) (36 HORAS)](https://fictizia.com/formacion/curso-angular-javascript)
- [Curso de React + Redux (30 HORAS)](https://fictizia.com/formacion/curso-react-js-redux)
- [Curso de Node.js para desarrolladores Front-end (24 HORAS)](https://fictizia.com/formacion/curso-nodejs)
- [Curso de AngularJS (v1.x) (30 HORAS)](https://fictizia.com/formacion/curso-angularjs)
- [Curso de Polymer (42 HORAS)](https://fictizia.com/formacion/curso-polymer)
- [Curso de PHP (45 HORAS)](https://fictizia.com/formacion/curso-php)
- [Curso de PHP Avanzado con Laravel (36 HORAS)](https://fictizia.com/formacion/curso-laravel-php-avanzado)
- [Curso de Python (45 HORAS)](https://fictizia.com/formacion/curso-python)
- [Curso de aplicación y entrenamiento de Seguridad OWASP Top 10 (32 HORAS)](https://fictizia.com/formacion/curso-seguridad-owasp)
- [Curso de metodologías ágiles para desarrollo de proyectos (33 HORAS)](https://fictizia.com/formacion/curso-agile-scrum)
- [Curso de Vue.JS + Vuex (36 HORAS)](https://fictizia.com/formacion/curso-vue-js)
```

```js
var articleList = document.querySelectorAll(".plan");
var onlyMain = document.querySelector(".onlyMainTitle").innerText;
var mensaje = "";

console.log("# Cursos de Fictizia en el " +onlyMain);
for (var i = 1; i < articleList.length; ++i){
    var mainTitles = articleList[i].querySelector("h1 > a");
    var courseHours = articleList[i].querySelector(".mainTag").innerText;
    var anchorText = mainTitles.innerText;
    var coursesLinks = mainTitles.getAttribute("href");
    mensaje += "- [" +anchorText+ " (" +courseHours+ ")](" +coursesLinks+")\n";
}
console.log(mensaje);
```



**2 -** Hagamos la [web del Metro](https://www.metromadrid.es/es/index.html) más divertida.
- Saca el estado actual de todas las líneas del metro de Madrid por consola.


- Respuesta esperada:
```txt
Circulación normal en Línea 1
Circulación normal en Línea 8
Circulación normal en Línea 2
Circulación normal en Línea 9
Circulación normal en Línea 3
Circulación normal en Línea 10
Circulación normal en Línea 4
Circulación normal en Línea 11
Circulación normal en Línea 5
Circulación normal en Línea 12
Circulación normal en Línea 6
Circulación normal en Ramal
Circulación normal en Línea 7
Circulación normal en ML1
```


**3 -**  Diseña un script que sustituya todas las imágenes de las entradas de [Tecnología del Mundo Today](http://www.elmundotoday.com/noticias/tecnologia/) por [imágenes dummy de gatitos](https://placekitten.com/).

```js
var picBlocks = Array.prototype.slice.call(document.querySelectorAll(".entry-thumb"));

picBlocks.forEach(pic => {
    if (pic.hasAttribute("src")){
        pic.setAttribute("src", "https://placekitten.com/200/300");
    }
  });
```


**4 -** Nos creamos un array de objetos con la informacion, links y fotografias de l@s [profes de Fictizia](https://www.fictizia.com/profesorado)


```js
var teachersList = [];
var teachers = document.querySelectorAll(".microCard");

for (var i = 0; i < teachers.length; ++i) {

	var teacher = teachers[i];

	teacherDetails = {
		name: teacher.querySelector("h3").innerText,
		bio: teacher.querySelector("p").innerText,
		avatar: teacher.querySelector("img").src
	};

	var links = teacher.querySelectorAll(".microBtns > li");

	for (var x = 0; x < links.length; ++x) {
		var link = links[x];
		var linkNombre = link.innerText.toLowerCase().trim();
		var linkUrl = link.querySelector("a").href;
		teacherDetails[linkNombre] = linkUrl
	}
	
	teachersList.push(teacherDetails)
}
	console.log(teachersList);

```

```js
// Me, trying

var articleList = document.querySelectorAll(".microCard");
var infoArray = [];

for (var i = 0; i < articleList.length; ++i) {
	 var mainImgs = articleList[i].querySelector("img");
	 var pictures = mainImgs.getAttribute("src");
	 var mainTitles = articleList[i].querySelector("h3").innerText;
	 var mainInfo = articleList[i].querySelector("p").innerText;

	console.log("Pic: ", pictures);
	console.log("Name: ", mainTitles);
	console.log("Info: ", mainInfo);
}

// const peopleArray = Object.keys(peopleObj).map(i => peopleObj[i])


var articleList = document.querySelectorAll(".microCard");
var infoArray = [];

for (var i = 0; i < articleList.length; ++i) {
	 var mainImgs = articleList[i].querySelector("img");
	 var pic = mainImgs.getAttribute("src");
	 var name = articleList[i].querySelector("h3").innerText;
	 var info = articleList[i].querySelector("p").innerText;

    var data = {
        "pic": pic,
        "name": name,
        "info": info
    }

    infoArray.push(data)
}

console.log(infoArray)
// @TODO: faltan links


```



