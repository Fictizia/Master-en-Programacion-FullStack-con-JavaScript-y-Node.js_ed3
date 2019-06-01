![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 29

### Ejercicios

**1 -** `$http` es una librería que crearemos para poder funcionar con promesas usando `XMLHttpRequest` y devolviendo el JSON ya parseado

Funcionamiento esperado:
```javascript
$http("http://airemad.com/api/v1/station")
  .get()
  .then(data => {
    let content = ""
    data.forEach(element => {
      content += `<li>La estación ${element.nombre_estacion} (${element.id}) está en ${element.direccion}</li>`
    })
    document.body.innerHTML = `<ul>${content}</ul>` 
  })
  .catch(console.log);
```

```javascript
function $http(url){

  var core = {

    ajax : function (method, url, args) {

      var promise = new Promise( function (resolve, reject) {

        var client = new XMLHttpRequest();
        var uri = url;

        if (args && (method === 'POST' || method === 'PUT')) {
          uri += '?';
          var argcount = 0;
          for (var key in args) {
            if (args.hasOwnProperty(key)) {
              if (argcount++) {
                uri += '&';
              }
              uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
            }
          }
        }

        client.open(method, uri);
        client.send();

        client.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(JSON.parse(this.response));
          } else {
            reject(this.statusText);
          }
        };
        client.onerror = function () {
          reject(this.statusText);
        };
      });

      return promise;
    }
  };

  // Patrón Adaptador
  return {
    'get' : function(args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(args) {
      return core.ajax('DELETE', url, args);
    }
  };
};
```
