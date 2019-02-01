![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 41

### Blob

![IMG](../assets/clase41/44625a5f-3e9a-4ea7-b38c-75f8bdd31c0d.gif)

**Soporte**
- [Blob constructing](https://caniuse.com/#feat=blobbuilder)
- [Blob URLs](https://caniuse.com/#feat=bloburls)

**Importante**
- Podemos lidiar con `file interface` (input file)
- Podemos generar ficheros al vuelo
- Podemos convertir el contenido d eun blob en una URL para usarla con etiquetas normales

**Recursos**
- [Blob en MDN](https://developer.mozilla.org/es/docs/Web/API/Blob)
- [Soporte blob urls](http://caniuse.com/#feat=bloburls)
- [Soporte blob constructing](http://caniuse.com/#feat=blobbuilder)


**Ejemplo básico**
```javascript
const blob = new Blob(['body { color: red; }'], {type: 'text/css'});
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = window.URL.createObjectURL(blob);
document.body.appendChild(link);
```

### Blob: Propiedades

**[Blob.type](https://developer.mozilla.org/en-US/docs/Web/API/Blob/type)**
```javascript
// <input type="file" multiple id="ficheros">

// Permitimos solo *.png, *.jpeg and *.gif images
const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];
const fileInput = document.getElementById("ficheros");
const files = fileInput.files;

for (let i = 0; i < files.length; i++) {
    const validFile = allowedFileTypes.indexOf(files[i].type) > -1
    console.log(`${files[i]} ${validFile ? "es válido" : "NO es válido"}`)
});
```

**[blob.size](https://developer.mozilla.org/es/docs/Web/API/Blob/size)**

```javascript
// <input type="file" multiple id="ficheros">
const fileInput = document.getElementById("ficheros");
const files = fileInput.files;

for (let i = 0; i < files.length; i++) {
  console.log(`${files[i].name} tiene ${files[i].size} Bytes`);
}
```

### Blob: Métodos

**[Blob.slice()]()**
```javascript
const contenido = ['<a id="a"><b id="b">hey!</b></a>'];
const miFichero = new Blob(contenido, {type : 'text/html'});
const blobParcial = miFichero.slice(1,10, "text/plain");
```


### FileSystem

![IMG](../assets/clase41/c49ba24d-6382-4a7f-9c03-5861816ebf9e.gif)


**Importante**
- [NO ESTA SOPORTADO AÚN AL 100%](https://developer.mozilla.org/es/docs/Web/API/FileSystem#Browser_compatibility)
- Permite el almacenamiento de ficheros de forma temporal o persistente
- Es necesario pedir permisos
- Estan en su propio sandbox
- [Introduction to the File and Directory Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction#Restrictions)


**Funcionalidades**
- Lectura y manipulación de archivos ([File/Blob](https://developer.mozilla.org/es/docs/Web/API/Blob), [FileList](https://developer.mozilla.org/es/docs/Web/API/FileList), [FileReader](https://developer.mozilla.org/es/docs/Web/API/FileReader),
- Creación y escritura ([BlobBuilder](https://developer.mozilla.org/es/docs/Web/API/BlobBuilder), FileWriter),
- Acceso a sistemas de archivos y directorios ([DirectoryReader](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader), [DirectoryEntry](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry), [LocalFileSystem](https://developer.mozilla.org/en-US/docs/Web/API/LocalFileSystem)).


**Recuros**
- [HTML5 Rocks! | Cómo explorar las API de sistemas de archivos (FileSystem APIs)](https://www.html5rocks.com/es/tutorials/file/filesystem/)
- [MDN | FileSystem](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)


### Web Workers: Intro

![ejemplo](../assets/clase41/3fd4677c-99d0-444f-9ff2-3ee8ce8817b1.png)


- Los Web Workers se ejecutan en un subproceso aislado.
- Funcionan aunque la pagina se haya cerrado
- Siguen funcionando aunque el navegadro se cierre.
- [Especificación](http://www.whatwg.org/specs/web-workers/current-work/)
- [Soporte](http://caniuse.com/#feat=webworkers)


**Arquitectura**

![ejemplo](../assets/clase41/16bdb307-63f3-4497-8b0f-7f20b2e3622b.png)


**Alcance**
- En el contexto de un Worker, tanto self como this hacen referencia al alcance global del Worker
- Puede acceder a:
	- Objeto navigator
	- Objeto location (de solo lectura)
	- XMLHttpRequest
	- setTimeout(), setInterval(), etc...
	- [Caché de la aplicación](https://developer.mozilla.org/es/docs/Web/API/Window/applicationCache)
	- Importación de secuencias de comandos externas, [importScripts()](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts)
	- Generación de otros Web Workers

**Limitaciones**
- No se ejecutarán de forma local
- DOM
- Objeto window
- Objeto document
- Objeto parent


**Recomendaciones**

- Obtención previa y/o almacenamiento en caché de datos para un uso futuro
- Métodos para destacar la sintaxis de código u otros formatos de texto en tiempo real
- Corrector ortográfico
- Análisis de datos de vídeo o audio
- Entrada y salida en segundo plano o solicitud de servicios web
- Procesamiento de conjuntos o respuestas JSON de gran tamaño
- Filtrado de imágenes en <canvas>
- Actualización de varias filas de una base de datos web local

**Ejemplos**

- [Web Workers and Service Workers](http://codepen.io/ruzz311/pen/NNroab)
- [WEB Worker sample](http://codepen.io/nacholozano/pen/dpqvYk)

**Recursos**
- [Introducción a los Web Workers en html5rocks](https://www.html5rocks.com/es/tutorials/workers/basics/)
- [Web workers without a separate Javascript file?](http://stackoverflow.com/questions/5408406/web-workers-without-a-separate-javascript-file)
- [Offline Recipes for Service Workers by DWB](https://davidwalsh.name/offline-recipes-service-workers)
- [Using Web Workers to Speed-Up Your JavaScript Applications by treehouse](http://blog.teamtreehouse.com/using-web-workers-to-speed-up-your-javascript-applications)
- [Debugging Web Workers with Chrome Developer Tools](https://blog.chromium.org/2012/04/debugging-web-workers-with-chrome.html)
- [Using Web Workers en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Concurrency in JavaScript](http://typedarray.org/concurrency-in-javascript/)

**Librerías**
- [parallel.js](https://github.com/parallel-js/parallel.js) 
- [promise-worker](https://github.com/nolanlawson/promise-worker)
- [Catiline.js](http://catilinejs.com/)


### Web Workers: Básico

![ejemplo](../assets/clase41/22e74833-a74c-4628-8eac-667b7c988d41.png)

**Definición y puesta en marcha**

- Instanciando el Web Worker
```javascript
const worker = new Worker('fichero.js');
```

- Arrancando el Web Worker
```javascript
const worker = new Worker('fichero.js');
worker.postMessage();
```

**Comunicación**

- Desde el archivo principal
```javascript
const worker = new Worker('fichero.js');

worker.addEventListener('message', evento => {
  console.log('El worker dice: ', evento.data);
}, false);

worker.postMessage('Hola Mundo!');
```

- Desde el Web Worker
```javascript
self.addEventListener('message', evento => {
  self.postMessage(evento.data);
}, false);
```

**Parar un Web Worker**

- Desde el archivo principal
```javascript
worker.terminate()
```

- Desde el Web Worker
```javascript
self.close()
```

#### Web Workers: Avanzado

**Subworkers**
- La resolución de las URI de los Subworkers está relacionada con la ubicación de su Worker principal (en oposición a la página principal)
- Los Workers tienen la capacidad de generar Workers secundarios.
- Los Subworkers deben estar alojados en el mismo origen que la página principal.


**Blob**
En el HTML:
```html
<!-- inline worker -->
<script id="worker" type="javascript/worker">
    ((s => {
    	const increment = 1;
      let count = 0;
      const loop = 999999999;
      
      s.onmessage = e => {
          console.log(e.data);
          let test = 0;
          for( let i = 0 ; i < loop ;i++ ){
          	test = i;
            const int = Math.trunc( i*100/loop );
            if( int === count ){
          		s.postMessage( int );
              count += increment;
            }
          }
        s.postMessage( {finish:'loop finished'} );
      };
    }))(self);
 </script>
```


En JS:
```javascript
const blob = new Blob([document.querySelector('#worker').textContent], { type: "text/javascript" });
const worker = new Worker(window.URL.createObjectURL(blob));
```

**Shared Web Workers**

- [Epecificación](https://html.spec.whatwg.org/multipage/workers.html#sharedworker)
- [Soporte Shared Web Workers](http://caniuse.com/#feat=sharedworkers)


**Definición y puesta en marcha**

- Instanciando el Web Worker
```javascript
const worker = new SharedWorker("fichero.js");
```

- Arrancando el Web Worker utiliznado port
```javascript
const worker = new SharedWorker("/html5/web-worker-shared.jsp");

worker.port.addEventListener("message", event => {
	console.log("datos del ShraedWorker", event.data);
}, false);

worker.port.start();
```

**Comunicación**

- Desde el archivo principal
```javascript
const worker = new SharedWorker("/html5/web-worker-shared.jsp");

worker.port.addEventListener("message", event => {
	console.log("datos del ShraedWorker", event.data);
}, false);

worker.port.postMessage("First Message");
```

- Desde el Web Worker
```javascript
const ports = [];

onconnect = event => {
    const port = event.ports[0];
    ports.push(port);
    port.start();
    port.addEventListener("message", event => { listenForMessage(event, port); } );
}


listenForMessage = (event, port) => {
    port.postMessage(`Reply from SharedWorker to: ${event.data}`);
}

//Implementation of shared worker thread code
setInterval(() => { runEveryXSeconds() }, 5000);

function runEveryXSeconds() {
    for(i = 0; i < ports.length; i++) {
        ports[i].postMessage(`Calling back at : ${new Date().getTime()}`);
    }
}
```
