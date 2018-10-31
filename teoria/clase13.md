![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 13


### Manipulación del DOM: Efectos

**Ocultar un elemento**
```javascript
el.style.display = 'none';
```

**Mostrar un elemento**
```javascript
el.style.display = '';
```

**Librerías útiles**
- [animate.css](http://daneden.github.io/animate.css/)
- [move.js](https://github.com/visionmedia/move.js)

### Manipulación del DOM: Trabajando con Clases

**Añadir una clase**
```javascript
el.classList.add(className);
```

**Verificar una clase**
```javascript
el.classList.contains(className);
```

**Eliminar una clase**
```javascript
el.classList.remove(className);
```

**Alternar una clase**
```javascript
el.classList.toggle(className);
```

**Remplazar una clase**
```javascript
element.classList.replace('old', 'new');
```

### Manipulación del DOM: Insertando elementos

**Insertar contenido despues de un elemento (after)**
```javascript
el.insertAdjacentHTML('afterend', "<h1>Nuevo contenido</h1>");
```

**Insertar contenido antes de un elemento (before)**
```javascript
el.insertAdjacentHTML('beforebegin', "<h1>Nuevo contenido</h1>");
```

**Insertar contenido al final del propio elemento (append)**
```javascript
elementParent.appendChild(el);
```

**Insertar contenido al principio del propio elemento (prepend)**
```javascript
elementParent.insertBefore(el, elementParent.firstChild);
```


### Manipulación del DOM: Accediendo a elementos 


**Acceder al elemento Hijo**
```javascript
el.children
```

**Acceder al elemento Padre**
```javascript
el.parentNode
```

**Eliminar un elemento**
```javascript
el.parentNode.removeChild(el);
```

**Verificar si un elemento contiene un selector**
```javascript
el.querySelector(selector) !== null
```

**Buscar elementos dentro otro Elemento**
```javascript
el.querySelector(selector)
el.querySelectorAll(selector)
```

### Manipulación del DOM: Modificando contenido


**Cambiar/modificar/borrar el texto de dentro de un elemento**
```javascript
el.textContent = string;
```
**Cambiar/modificar/borrar el html de dentro de un elemento**
```javascript
el.innerHTML = string;
```

**Cambiar/modificar/borrar el html de un elemento**
```javascript
el.outerHTML = string;
```

### Manipulación del DOM: Trabajando con Atributos


**Retornar los valores de un atributo**
```javascript
el.getAttribute('tabindex');
```

**Cambiar/modificarlos valores de un atributo**
```javascript
el.setAttribute('tabindex', 3);
```
**Borrar los valores de un atributo**
```javascript
element.removeAttribute('href');
```

**Verificar si existe un atributo en un elemento**
```javascript
element.hasAttribute('href');
```


### Recursos
- [How To Traverse the DOM](https://www.digitalocean.com/community/tutorials/how-to-traverse-the-dom)
- [How To Make Changes to the DOM](https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom)
- [How To Modify Attributes, Classes, and Styles in the DOM](https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom)


### Trabajar sin JQuery

![img](../assets/clase13/47909bc7-5848-4174-96c8-0992155d664d.png)

- **[You Might Not Need Jquery](http://youmightnotneedjquery.com/)**
- **[You Might Not Need Jquery(en GitHub)](https://github.com/HubSpot/youmightnotneedjquery)**


### Carga asincrona de Scripts

- La renderización de la pagian espera hasta tener cargadas todas sus dependencias (src, href, etc..)
- La recomendación de cargar los scripts al final del body sigue vigente
- Otra forma de aliviar este peso es cargar scripts y multimedia haciendo uso de AJAX
- Otra forma de gestionar esto para proyectos grandes es usar [Requirejs](https://requirejs.org/), [Browserify](http://browserify.org/) y demás...
- `async` y `defer` vienen al [rescate](https://es.stackoverflow.com/a/24430)
s
```html
<script src="fichero1.js" async></script>
//Carga fichero1.js sin interferir en el renderizado del DOM

<script src="fichero2.js" defer></script>
//Carga fichero2.js después de haberse descargado.
```

### Frameworks para HTML y CSS


### Frameworks: Bootstrap

![Bootstrap](../assets/clase13/fbfd18b8-3629-4c25-a453-4472d559e1a8.svg)

**Recursos**
- [twbs/bootstrap](https://github.com/twbs/bootstrap)
- [Bootstrap Expo](https://expo.getbootstrap.com/)
- [Lista gigante de recursos](https://startbootstrap.com/bootstrap-resources)

**Core**
- [Migración de Bootstrap 3.3 a 4.0](https://getbootstrap.com/docs/4.0/migration/)
- [Bootstrap v4](https://getbootstrap.com/)
    - [Introduction](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
    - [Layout](https://getbootstrap.com/docs/4.0/layout/overview/)
    - [Contenido](https://getbootstrap.com/docs/4.0/content/reboot/)
    - [Componentes](https://getbootstrap.com/docs/4.0/components/alerts/)
    - [Utilidades](https://getbootstrap.com/docs/4.0/utilities/borders/)
    - [Extensiones](https://getbootstrap.com/docs/4.0/extend/icons/)
    - [Documentación](https://getbootstrap.com/docs/4.0/getting-started/introduction/)   
    - [Ejemplos](https://getbootstrap.com/docs/4.0/examples/)   
- [Bootstrap v3.3](https://getbootstrap.com/docs/3.3/)
    - [Getting started](https://getbootstrap.com/docs/3.3/getting-started/)
    - [CSS](https://getbootstrap.com/docs/3.3/css/)
    - [Componentes](https://getbootstrap.com/docs/3.3/components/)
    - [JavaScript](https://getbootstrap.com/docs/3.3/javascript/)
    - [Customize & download](https://getbootstrap.com/docs/3.3/customize/)

**Temas**
- [Themes built by or reviewed by Bootstrap's creators](https://themes.getbootstrap.com/)
- [Flat UI](http://designmodo.github.io/Flat-UI/)
- [bootswatch](https://bootswatch.com/)
- [75+ Free Bootstrap HTML5 Website Templates](http://webdesignwheel.com/free-bootstrap-html5-website-templates.html)
- [45 Free Bootstrap Themes For Creating A Professional Website](https://savedelete.com/design/free-bootstrap-themes/174529/)

**Componentes de UI**
- [Bootsnipp](https://bootsnipp.com/)
- [CodesUI](https://codexui.com/)

### Frameworks: Otros...

- [Foundation](https://foundation.zurb.com/)
- [Bulma](https://bulma.io/)
- [Ulkit](https://getuikit.com/)
- [Semantic UI](https://semantic-ui.com/)
- [material.io](https://material.io/)
- [Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/)
- [Material Design Lite](https://getmdl.io/)

