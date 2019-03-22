![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 60

### Frameworks
![img](../assets/clase62/c3f7890f-cbbf-494b-8d9d-60fb73b7f66f.jpg)
> Un `framework`, `entorno de trabajo` o `marco de trabajo` es un conjunto estandarizado de conceptos, prácticas y criterios para enfocar un tipo de problemática particular que sirve como referencia, para enfrentar y resolver nuevos problemas de índole similar.
> En el desarrollo de software, un entorno de trabajo es una estructura conceptual y tecnológica de asistencia definida, normalmente, con artefactos o módulos concretos de software, que puede servir de base para la organización y desarrollo de software. Típicamente, puede incluir soporte de programas, bibliotecas, y un lenguaje interpretado, entre otras herramientas, para así ayudar a desarrollar y unir los diferentes componentes de un proyecto.
> Representa una arquitectura de software que modela las relaciones generales de las entidades del dominio, y provee una estructura y una especial metodología de trabajo, la cual extiende o utiliza las aplicaciones del dominio.
> [Wikipedia](https://es.wikipedia.org/wiki/Framework)

### JS Frameworks: ¿Por qué existen?
- [The deepest reason why modern JavaScript frameworks exist](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445)
- [The Magpie Developer](http://blog.codinghorror.com/the-magpie-developer/)

### JS Frameworks - Partes: Web components

**Partes en juego**
- [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) *Necesario para agregar nuevos elementos HTML en el DOM*
- [HTML Templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) *Las reglas sobre cómo crear un DOM único encapsulado con sintaxis HTML*
- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM) *Permiten importar código HTML y reutilizar sus componentes en otras webs*
- [HTML Imports](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports) *Necesario para escribir código reutilizable y declarar cómo debe verse, aunque es [problemático](https://hacks.mozilla.org/2015/06/the-state-of-web-components/)*

**Ejemplos en Acción**
- [carlosazaustre/webcomponents-example](https://github.com/carlosazaustre/webcomponents-example)
- [PLAIN ES6. Web components and Shadow DOM by Mikko Kämäräinen](https://codepen.io/mikkokam/pen/dopmRb?editors=1010)
- [nuclei/material-input](https://github.com/nuclei/material-input)

**[Frameworks y librerías destacadas](https://www.webcomponents.org/libraries)**
- [Hybrids](https://github.com/hybridsjs/hybrids) *🖍 UI library for creating Web Components with simple and functional API*
- [LitElement](https://github.com/Polymer/lit-element) *A simple base class for creating fast, lightweight web components*
- [Polymer](https://www.polymer-project.org/) *Our original Web Component library*
- [Skate.js](https://skatejs.gitbooks.io/skatejs/content/) *a web component library designed to give you an augmentation of the web component specs focusing on a functional rendering pipeline, clean property / attribute semantics and a small footprint*
- [Slim.js](http://slimjs.com/) *Fast and robust micro-framework and tooling for web components*
- [Stencil.js](https://stenciljs.com/) *A Web Component compiler for building fast, reusable UI components and Progressive Web Apps 💎 Built by the Ionic Framework team*

**Recursos**
- [Building Web Components with Vanilla JavaScript](https://dev.to/aspittel/building-web-components-with-vanilla-javascript--jho)
- [HTML Web Component using Plain JavaScript](https://www.codementor.io/ayushgupta/vanilla-js-web-components-chguq8goz)
- [Web Fundamentals Guides | Custom Elements v1: Componentes web reutilizables](https://developers.google.com/web/fundamentals/web-components/customelements?hl=es)
- [Carlos Azaustre | Cómo crear un WebComponent de forma nativa](https://carlosazaustre.es/como-crear-webcomponent-de-forma-nativa/)
- [MDN | Web components](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [Web components tutorial](https://component.kitchen/tutorial)
- [Intro To Web Components: What They Are & How They Work](https://designmodo.com/web-components/)
- [Stencil.js: crear web components nunca fue tan fácil](https://www.paradigmadigital.com/dev/stencil-js-crear-web-components-nunca-fue-tan-facil/)
- [Web Components in 2018](https://www.sitepen.com/blog/2018/07/06/web-components-in-2018/)
- [The Holy Grail Of Reusable Components: Custom Elements, Shadow DOM, And NPM](https://www.smashingmagazine.com/2018/07/reusable-components-custom-elements-shadow-dom-npm/)
- [Communication between components (universal)](https://hackernoon.com/communication-between-components-7898467ce15b)
- [Front-end microservices with Web Components](https://hackernoon.com/front-end-microservices-with-web-components-597759313393)
- [The Wonderful World of Web Components](https://hackernoon.com/the-wonderful-world-of-web-components-e4c1675c6901)
- [Building a custom tag input with Skate.js](https://hackernoon.com/building-a-custom-tag-input-with-skate-js-fbd4cdf744f)

### JS Frameworks - Partes: virtual dom

**Librerías**
- [Virtual-dom](https://github.com/Matt-Esch/virtual-dom) *A Virtual DOM and diffing algorithm*
- [Snabbdom](https://github.com/snabbdom/snabbdom) *A virtual DOM library with focus on simplicity, modularity, powerful features and performance*
- [Maquette](https://github.com/AFASSoftware/maquette) *Pure and simple virtual DOM library*

**Recursos**
- [Learn the differences between Shadow DOM and Virtual DOM](https://vuejsfeed.com/blog/learn-the-differences-between-shadow-dom-and-virtual-dom)
- [Shadow DOM != Virtual DOM](https://develoger.com/shadow-dom-virtual-dom-889bf78ce701)
- [JSDayES 2018 - Rubén Valseca - "¿Cómo funciona un Virtual DOM?"](https://www.youtube.com/watch?v=yFE4iWkrI2Y)
- [How to write your own Virtual DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)
- [¿Qué es el Virtual DOM y como funciona?](https://www.arquitecturajava.com/que-es-el-virtual-dom-y-como-funciona/)
- [The difference between Virtual DOM and DOM](https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

### JS Frameworks - Partes: Data Binding

**Librerías**
- [nx-js | observer-util](https://github.com/nx-js/observer-util) *Transparent reactivity with 100% language coverage. Made with ❤️ and ES6 Proxies.*
- [razilobind](https://github.com/razilo/razilobind) *ES6 JS/HTML binding library for creating dynamic web applications through HTML attribute binding. Pulls in all required parts and configures as RaziloBind*
- [hamsa-es6](https://github.com/soyjavi/hamsa-es6) *A dead simple, data-binding & observable model in EcmaScript 6*
- [GIST | WickyNilliams/bind.js](https://gist.github.com/WickyNilliams/9227916) *Super simple one-way data-binding*

**Recursos**
- [Writing a JavaScript Framework - Data Binding with ES6 Proxies](https://blog.risingstack.com/writing-a-javascript-framework-data-binding-es6-proxy/)
- [Frameworkless JavaScript Part 3: One-Way Data Binding](https://jack.ofspades.com/frameworkless-javascript-part-3-one-way-data-binding/)
- [ES6 in Action: How to Use Proxies](https://www.sitepoint.com/es6-proxies/)
- [JS & DOM data bindings in 2017](https://medium.com/@WebReflection/js-dom-data-bindings-in-2017-1545f38cfdc8)
- [Data-binding Revolutions with Object.observe()](https://www.html5rocks.com/en/tutorials/es7/observe/)
- [:book: ExploringJS | Metaprogramming with proxies](http://exploringjs.com/es6/ch_proxies.html)
- [Metaprogramming in ES6: Part 3 - Proxies](https://www.keithcirkel.co.uk/metaprogramming-in-es6-part-3-proxies/)
- [Mozilla Hacks | ES6 In Depth: Proxies](https://hacks.mozilla.org/2015/07/es6-in-depth-proxies-and-reflect/)

### JS Frameworks - Partes: Hablemos de SEO y Crawlers...

**Herramientas**
- [prerender.io](https://prerender.io/)
- [rendertron](https://github.com/GoogleChrome/rendertron#installing--deploying)
- [puppeteer](https://developers.google.com/web/tools/puppeteer/get-started)

**recursos**
- [Google: Crawling SPA (Single-Page Application) Isn't Easy But Can Work](https://www.seroundtable.com/google-spa-seo-26059.html)
- [AngularJS SEO: Get your site indexed and to the top of the search results.](https://prerender.io/js-seo/angularjs-seo-get-your-site-indexed-and-to-the-top-of-the-search-results/)
- [SEO-friendly Single Page Applications (AngularJS, Prerender.io) by Battlefy Jaime Bueza](https://www.slideshare.net/Battlefy/seofriendly-single-page-applications-angularjs-prerenderio-by-battlefy-jaime-bueza)
- [Optimizing AngularJS Single-Page Applications for Googlebot Crawlers](https://moz.com/blog/optimizing-angularjs-single-page-applications-googlebot-crawlers)
- [The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8)
- [Headless Chrome: an answer to server-side rendering JS sites](https://developers.google.com/web/tools/puppeteer/articles/ssr)
- [AngularJS - server-side rendering](https://stackoverflow.com/questions/16232631/angularjs-server-side-rendering)
