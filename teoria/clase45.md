![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 45


### Cloud Storage

![storage](../assets/clase45/094f2ebe-20cd-42c2-a1ab-de3205589c7f.jpeg)

[Todas las funcionalidades](https://firebase.google.com/docs/storage/web/start)

**Subir ficheros**

```javascript
// Create a root reference
const storageRef = firebase.storage().ref();

// use the Blob or File API
const file = ...

// Upload the file
storageRef.put(file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
```

**Descargar ficheros**

```javascript
// Create a root reference
const storageRef = firebase.storage().ref();

storageRef.child('images/stars.jpg').getDownloadURL().then((url) => {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  fetch(url)
      .then((response) => response.blob())
      .then((file) => {
          console.log('Here is the file!', file);
      });

  // Or inserted into an <img> element:
  var img = document.getElementById('myimg');
  img.src = url;
}).catch(function(error) {
  // Handle any errors
});
```

**Recursos**
- [Example of native HTML5 file drag and drop with Firebase](https://github.com/fedosejev/html5-file-drag-and-drop-firebase)
- [Getting Started with Firebase Storage on the Web - Firecasts](https://www.youtube.com/watch?v=SpxHVrpfGgU)
- [Multiple drag and drop file uploading to firebase storage](https://hurlatunde.github.io/multiple-drag-and-drop-file-uploading-to-firebase-storage)
- [5 tips for Firebase Storage](https://firebase.googleblog.com/2016/07/5-tips-for-firebase-storage.html)
