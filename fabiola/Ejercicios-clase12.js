/* 1 - Saca una lista de los cursos disponibles en Fictizia en el área de Desarrollo interactivo y Web y conviertelo en Markdown. */
var articles = Array.prototype.slice.call(document.querySelectorAll('article'));

articles.forEach(function (article) {
  var anchor = article.querySelector('header > h1 > a');
  var title = article.querySelector('header > h1 > a').innerHTML;
  var hours = article.querySelector('strong').innerHTML;
  //console.log(anchor, title, hours);
  console.log(`[${title} (${hours})](${anchor})`);
});

/* 2 - Hagamos la web del Metro más divertida.
    Saca el estado actual de todas las líneas del metro de Madrid por consola.
 */
var metroLines = Array.prototype.slice.call(
  document.getElementsByClassName('circulacion')
);

metroLines.forEach(function (line) {
  var lineStatus = line.querySelector('a').innerText;
  console.log(lineStatus);
});

/* 3 - Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos. */
var images = Array.prototype.slice.call(document.querySelectorAll('img'));

images.forEach(function (image) {
  var kittenPic = 'http://placekitten.com/324/235';
  image.setAttribute('src', kittenPic);
});

/* 4 - Nos creamos un array de objetos con la informacion, links y fotografias de l@s profes de Fictizia */
var teachersData = [];
var teachers = Array.prototype.slice.call(
  document.getElementsByClassName('microCard')
);

teachers.forEach(function (teacher) {
  var name = teacher.querySelector('div > h3').innerHTML;
  var teacherInfo = teacher.querySelector('div > p').innerHTML;
  var photo = teacher.querySelector('img').getAttribute('src');
  var links = Array.prototype.slice.call(
    teacher.querySelectorAll('ul > li > a')
  );

  teachersData.push({
    teacherName: name,
    teacherPic: photo,
    teacherInfo: teacherInfo,
    teacherLinks: links
  });
});
