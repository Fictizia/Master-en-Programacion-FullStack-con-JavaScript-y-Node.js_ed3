![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 50


### NPM

![npm_logo](../assets/clase50/0f7ca75f-93fa-4d5c-b995-087cb953bd55.png)

**Documentación**
- [Web Oficial](https://www.npmjs.com/)
- [Features](https://www.npmjs.com/features)
- [Pricing](https://www.npmjs.com/pricing)
- [Documentación](https://docs.npmjs.com/)
- [NPM Community](https://npm.community/)
- [NPM en Github](https://github.com/npm/cli)
- [@npmjs en Twitter](https://twitter.com/npmjs)
- [@npmstatus en Twitter](https://twitter.com/npmstatus)
- [@npm_support en Twitter](https://twitter.com/npm_support)

**Instalar paquetes:**
- global:
```
npm install -g <paquete>
```  

- local:
```
npm install <paquete>
```    

**Buscar paquetes**
```
  npm search <paquete>
```

**Información de los paquetes**
```
  npm view <paquete>
```

**Lista de paquetes instalados**
```
  npm ls
```

**Lista de paquetes instalados globalmente**
```
  npm ls -g
```

**Instalando versiones especificas:**

- la más reciente:
```  
  npm install <paquete>@latest
```  

- versión especifica:
```  
  npm install <paquete>@1.x (1.xx.xx)
```

- Otra versión especifica
```
  npm install <paquete>@2.10.x (2.10.x)
```

**Paquetes desactualziados:**
```
npm outdated
```

**Actualizando paquetes:**
```
npm update <paquete>
```

**Desinstalando paquete:**
```
npm uninstall <paquete>
```

**Información sobre Bugs**
```
npm bugs <paquete>
```

**[Más comandos - CLI](https://docs.npmjs.com/cli/install)**


### npx

![npx](../assets/clase50/c981bd9a-2190-47f3-83a2-d0ff9b762824.jpeg)

A partir de la versión [`v5.2.0`](https://github.com/npm/npm/releases/tag/v5.2.0) de `npm` se incluye un nuevo binario llamado `npx`.

Al igual que `npm` permite manejar las dependencias de un proyecto a través del repositorio de paquetes, con `npx` también vamos a poder manejar ejecutables que no tengamos instalados en nuestra máquina.
Si ejecutamos un comando a través de `npx` (ej. `npx cowsay "Hola"`) se intentará ejecutar dicho paquete desde nuestro directorio actual, en el caso de que no se encuentre descargado se descargará automáticamente y se ejecutará.

Un uso común que se le puede dar es el de ejecutar paquetes que normalmente no utilizamos a menudo (por ejemplo `yeoman` o `create-react-app`), como pueden ser generadores de código o paquetes que no queramos descargar para ocupar sitio en el disco.

También se puede utilizar para invocar paquetes en otras versiones de node:

```bash
# Con "-p" añadimos un paquete a "$PATH"
npx -p node@8 npx cowsay "Hola"
```

```bash
# Descargamos cowsay y lolcatjs, a continuación hacemos un "echo"
# y la salida se la pasamos a "cowsay" y "lolcat"
npx -p cowsay -p lolcatjs -c 'echo "$npm_package_name@$npm_package_version" | cowsay | lolcatjs'
```


### Dependency Hell:

![img](../assets/clase50/0df145d9-fd8c-40fb-a61f-ad9c33ba6c75.jpeg)

**Abyssus abyssum invocat. El abismo llama al abismo (Un paso en falso lleva a otro).**

- [nipster](http://nipstr.com/)
- [Nodei.co](https://nodei.co/)
- [Dependency Hell](http://www.wikiwand.com/en/Dependency_hell)
- [David Dm](https://david-dm.org/)
   - [Ejemplo Twitter-sentiments](https://david-dm.org/UlisesGascon/twitter-sentiments#info=dependencies&view=list)
   - [Ejemplo Grunt](https://david-dm.org/gruntjs/grunt#info=dependencies&view=table)
   - [Ejemplo Express](https://david-dm.org/strongloop/express)
   - [Ejemplo Bower](https://david-dm.org/bower/bower#info=dependencies&view=table)
- [ShieldsIO](http://shields.io/)
   - [Your Badge Service](http://badges.github.io/gh-badges/)
- [Snyk: Open Source Security Platform](https://snyk.io/)
   - [The State of Open Source Security](https://snyk.io/stateofossecurity/) 


### package.json

- Datos proyecto
- Tareas
- Dependencias (dependencies y devDependencies)
- **[Documentación](https://docs.npmjs.com/files/package.json)**

- **Creación:**
```
  npm init
```

- **Guardar nuevas dependencias:**
```
 npm install <paquete> --save
```

- **Guardar nuevas dependencias (solo para entorno desarrollo):**
```
 npm install <paquete> --save -dev
```

- **Guardando versiones especificas:**
  - (1.xx.xx):
```
  npm install --save <paquete>@1.x
```

  - (2.10.x)
```
  npm install --save <paquete>@2.10.x
```

  - Latest
```
  npm install --save <paquete>@lastest
```

- **Quitando dependencias:**
```
  npm uninstall <paquete> --save
```

- **Instalamos las dependencias en el proyecto:**
  - todo:
```
  npm install (todo)
```

  - Solo production:
```
  npm install --production (solo producción)
```

  - Solo development:
```
  npm install --dev
```

- **[Semantic Versioning](http://semver.org/lang/es/)**
	- Estructura -> X.Y.Z-Extra
	- Cambio Mayor - *No retrocompatible*
	- Cambio Menor - *Retrocompatible - Nuevas funcionaldiades o cambios*
	- Parche - *Retrocompatible - Solución de errores*
	- Extras - Indicativos o versiones especiales (Beta, Alfa, x86, etc...)

### npm scripts (comandos de CLI)

- **Añadiendo comandos:**

```javascript
  // ...
  "scripts": {
      "test": "npm -v",
      "start": "node -v",
      "hola": "echo 'Hola mundo!'"
  }
  // ...
```
- **Mostrando todos los comandos:**
```
    npm run
```

- **Ejecutando comandos:**
  - test
```
    npm test
```

  - start
```
    npm start
```

  - hola
```
    npm run hola
```

### YARN

![yarn_logo](../assets/clase50/49246ae4-e5bc-490a-9da9-d2757f3e39bd.png)

**Documentación**
- [Web](https://yarnpkg.com/en/)
- [Empezar](https://yarnpkg.com/en/docs/getting-started)
- [Documentación](https://yarnpkg.com/en/docs)
- [Paquetes](https://yarnpkg.com/en/packages/)
- [Blog](https://yarnpkg.com/blog/)
- [Instalar Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

**Iniciar un proyecto**
```
yarn init
```

**Añadir dependencias al proyecto**
```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

**Añadir dependencias al proyecto en categorías**
```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

**Actualizar dependencias**
```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

**Eliminar dependencias**
```
yarn remove [package]
```

**Instalar todas las dependencias**
```
yarn
yarn install
```

**¿quien pidio este paquete?**
```
yarn why [package]
```

**Yarn o NPM@5?**
- Yarn es [mas rapido](https://github.com/artberri/npm-yarn-benchmark)
- Yarn es más seguro

**Recursos**
- [npm@5 — Yarn killer?](https://medium.com/netscape/npm-5-yarn-killer-ba69737b24d0)
- [¿Tiene sentido Yarn ahora que tenemos npm 5?](https://www.campusmvp.es/recursos/post/tiene-sentido-yarn-ahora-que-tenemos-npm-5.aspx)
- [Does NPM 5 deprecate yarn?](https://blog.scottlogic.com/2017/06/06/does-npm5-deprecate-yarn.html)
- [Why I’m Sticking With Yarn (Sorry NPM 5)](https://codingwithspike.wordpress.com/2017/08/11/why-im-sticking-with-yarn/)
- [The npm Blog | v5.0.0](https://blog.npmjs.org/post/161081169345/v500)
- [Why i still don't use yarn](https://intoli.com/blog/node-package-manager-benchmarks/)
- [NPM@5 Arrived. But Is It As Fast As Yarn?](http://blog.diovani.com/technology/2017/05/31/npm-5.html)
- [npm vs Yarn – Which Package Manager Should You Use?](https://www.keycdn.com/blog/npm-vs-yarn/)
- [Yarn vs npm: Everything You Need to Know](https://www.sitepoint.com/yarn-vs-npm/)
- [It depends. The art of dependency management in Javascript](https://blog.softwaremill.com/it-depends-the-art-of-dependency-management-in-javascript-f1f9c3cde3f7)

### Bower

![Bower Logo](../assets/clase50/b083b92d-9402-4c01-98d1-aab97234f9b4.jpeg)

> Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

- [Bower](http://bower.io/)
- [Documentación - API](http://bower.io/docs/api/)
- [Tendencias Bower](http://bower.io/stats/)
- [Buscador Bower](http://bower.io/search/)


**Bower**
Instalamos Bower globalmente

```
  sudo npm install -g bower
```

Dependencias
```
  /home/ubuntu/.nvm/versions/node/v4.1.1/bin/bower -> /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/bower/bin/bower
  bower@1.6.6 /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/bower
  ├── is-root@1.0.0
  ├── destroy@1.0.3
  ├── stringify-object@1.0.1
  ├── junk@1.0.2
  ├── chmodr@1.0.2
  ├── user-home@1.1.1
  ├── q@1.4.1
  ├── abbrev@1.0.7
  ├── opn@1.0.2
  ├── bower-endpoint-parser@0.2.2
  ├── bower-logger@0.2.2
  ├── lockfile@1.0.1
  ├── archy@1.0.0
  ├── graceful-fs@3.0.8
  ├── nopt@3.0.6
  ├── lru-cache@2.7.3
  ├── retry@0.6.1
  ├── tmp@0.0.24
  ├── semver@2.3.2
  ├── md5-hex@1.1.0 (md5-o-matic@0.1.1)
  ├── fs-write-stream-atomic@1.0.4 (graceful-fs@4.1.2)
  ├── p-throttler@0.1.1 (q@0.9.7)
  ├── request-progress@0.3.1 (throttleit@0.0.2)
  ├── shell-quote@1.4.3 (array-filter@0.0.1, array-reduce@0.0.0, jsonify@0.0.0, array-map@0.0.0)
  ├── chalk@1.1.1 (escape-string-regexp@1.0.3, supports-color@2.0.0, ansi-styles@2.1.0, strip-ansi@3.0.0, has-ansi@2.0.0)
  ├── bower-json@0.4.0 (intersect@0.0.3, deep-extend@0.2.11, graceful-fs@2.0.3)
  ├── promptly@0.2.0 (read@1.0.7)
  ├── fstream@1.0.8 (inherits@2.0.1, graceful-fs@4.1.2)
  ├── which@1.2.0 (is-absolute@0.1.7)
  ├── bower-registry-client@1.0.0 (async@0.2.10, graceful-fs@4.1.2, request-replay@0.2.0, mkdirp@0.3.5)
  ├── mkdirp@0.5.0 (minimist@0.0.8)
  ├── glob@4.5.3 (inherits@2.0.1, inflight@1.0.4, once@1.3.3, minimatch@2.0.10)
  ├── fstream-ignore@1.0.3 (inherits@2.0.1, minimatch@3.0.0)
  ├── rimraf@2.4.4 (glob@5.0.15)
  ├── insight@0.7.0 (object-assign@4.0.1, async@1.5.0, tough-cookie@2.2.1, lodash.debounce@3.1.1, configstore@1.3.0, os-name@1.0.3)
  ├── bower-config@1.2.2 (graceful-fs@4.1.2, osenv@0.1.3, optimist@0.6.1)
  ├── github@0.2.4 (mime@1.3.4)
  ├── tar-fs@1.8.1 (pump@1.0.1, tar-stream@1.3.1)
  ├── request@2.53.0 (forever-agent@0.5.2, aws-sign2@0.5.0, caseless@0.9.0, tunnel-agent@0.4.1, oauth-sign@0.6.0, isstream@0.1.2, stringstream@0.0.5, json-stringify-safe@5.0.1, tough-cookie@2.2.1, qs@2.3.3, node-uuid@1.4.7, form-data@0.2.0, mime-types@2.0.14, combined-stream@0.0.7, http-signature@0.10.1, bl@0.9.4, hawk@2.3.1)
  ├── cardinal@0.4.4 (ansicolors@0.2.1, redeyed@0.4.4)
  ├── update-notifier@0.3.2 (is-npm@1.0.0, string-length@1.0.1, semver-diff@2.1.0, latest-version@1.0.1)
  ├── decompress-zip@0.1.0 (mkpath@0.1.0, touch@0.0.3, readable-stream@1.1.13, binary@0.3.0)
  ├── handlebars@2.0.0 (optimist@0.3.7, uglify-js@2.3.6)
  ├── inquirer@0.10.0 (strip-ansi@3.0.0, ansi-regex@2.0.0, figures@1.4.0, ansi-escapes@1.1.0, cli-width@1.1.0, rx-lite@3.1.2, through@2.3.8, readline2@1.0.1, cli-cursor@1.0.2, run-async@0.1.0, lodash@3.10.1)
  ├── mout@0.11.1
  └── configstore@0.3.2 (object-assign@2.1.1, xdg-basedir@1.0.1, uuid@2.0.1, osenv@0.1.3, js-yaml@3.4.5)
```

Arrancamos bower.json
```
  bower init
```

```javascript
  {
    "name": "pruebas_bower",
    "homepage": "https://github.com/UlisesGascon/Curso-in-company-NexTReT",
    "authors": [
      "ulisesgascon"
    ],
    "description": "",
    "main": "",
    "moduleType": [],
    "license": "MIT",
    "private": true,
    "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "test",
      "tests"
    ]
  }
```

Buscamos paquetes
```
  bower search <paquete>
  bower search jquery
```

Instalando Paquetes
```
  bower install <paquete>
  bower install jquery
```

Instalando versiones especificas del paquete
```
  bower install <package>#<version>
```

Instalando Paquetes y guardandolos en bower.json
```
  bower install <paquete> -save
  bower install bootstrap -save
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower install bootstrap -save
  bower jquery#~2.1.4             cached git://github.com/jquery/jquery.git#2.1.4
  bower jquery#~2.1.4           validate 2.1.4 against git://github.com/jquery/jquery.git#~2.1.4
  bower bootstrap#*           not-cached git://github.com/twbs/bootstrap.git#*
  bower bootstrap#*              resolve git://github.com/twbs/bootstrap.git#*
  bower bootstrap#*             download https://github.com/twbs/bootstrap/archive/v3.3.5.tar.gz
  bower bootstrap#*              extract archive.tar.gz
  bower bootstrap#*             resolved git://github.com/twbs/bootstrap.git#3.3.5
  bower jquery#~2.1.4            install jquery#2.1.4
  bower bootstrap#~3.3.5         install bootstrap#3.3.5
```

```javascript
  // bower.json
  {
    "name": "pruebas_bower",
    "homepage": "https://github.com/UlisesGascon/Curso-in-company-NexTReT",
    "authors": [
      "ulisesgascon"
    ],
    "description": "",
    "main": "",
    "moduleType": [],
    "license": "MIT",
    "private": true,
    "ignore": [
      "**/.*",
      "node_modules",
      "bower_components",
      "test",
      "tests"
    ],
    "dependencies": {
      "jquery": "~2.1.4",
      "bootstrap": "~3.3.5"
    }
  }
```

Borrando paquetes
```
  bower uninstall <paquete>
  bower uninstall jquery
```

Borrando paquetes  y guardandolos en bower.json
```
  bower uninstall <paquete>
  bower uninstall jquery
```

Verificando los paquetes instalados y sus dependencias
```
  bower list
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower list
  bower check-new     Checking for new versions of the project dependencies...
  pruebas_bower /home/ubuntu/workspace/profe/pruebas_bower
  ├─┬ bootstrap#3.3.5 (latest is 4.0.0-alpha)
  │ └── jquery#2.1.4 (3.0.0-alpha1+compat available)
  └── jquery#2.1.4 (latest is 3.0.0-alpha1+compat)
```

Actualizando todo
```
  bower update
```

Actualizando un paquete específico
```
  bower update <package>
```

Usando Bower
```
  bower list -paths
```

```
  ulisesgascon:~/workspace/profe/pruebas_bower (master) $ bower list -paths

    bootstrap: [
      'public/vendor/bootstrap/less/bootstrap.less',
      'public/vendor/bootstrap/dist/js/bootstrap.js'
    ],
    jquery: 'public/vendor/jquery/dist/jquery.js'
```

```html
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <title>Bootstrap 101 Template</title>

      <!-- Bootstrap -->
      <link href="public/vendor/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    </head>
    <body>
      <h1>Hello, world!</h1>

      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="public/vendor/jquery/dist/jquery.js"></script>
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="public/vendor/bootstrap/dist/js/bootstrap.js"></script>
    </body>
  </html>
```

**Bower (Entendiendo el funcionamiento)**

bower.json. ¿Qué necesitamos?
```javascript
  {
      "name": "Mi Aplicación",
      "version": "1.0.0",
      "dependencies": {
          "modernizr": "*",
          "jquery": "~2.0.2",
          "bootstrap": "*",
          "requirejs": "*"
      }
  }
```

.bowerrc ¿Donde lo necesitamos?
```javascript
  {
      "directory": "public/vendor",
      "json": "bower.json"
  }
```

Instalamos todo lo anterior
```
  bower install
```


**Bower (Trucos)**

- Se puede instalar componentes aislados primero y luego hacer *bower init* para generar el *bower.json* con todo incluido.
- Ignoramos la carpeta *bower_components* con *.gitignore*. Recuerda que haciendo *bower.init* se instala todo de nuevo.
- Instalación de paquetes más alla de los definidos en search:

- Paquetes registrados:
```
  $ bower install jquery
```

- Acesso directo -> GitHub:
```
  $ bower install desandro/masonry
```

- .git:
```
  $ bower install git://github.com/user/package.git
```

- URLs:
```
  $ bower install http://example.com/script.js
```

### Los problemas de BOWER

![img](../assets/clase50/912b09e0-b8ca-4b0f-836e-5a2b77417b88.png)

**Limitaciones**
- Gestión de conflictos manual
- Fiarnos del patrón SEMVER por parte de otr@s developers
- Sistema de paquetes propio
- Redundancia respecto a NPM
- Maravillo mundo del [Dependency hell](https://en.wikipedia.org/wiki/Dependency_hell)


### Bower ha muerto

![img](../assets/clase50/e75dfdcc-49a7-4f19-958d-518197c8722b.jpeg)

> BOWER is dead. Only use it for legacy reasons.

**Literatura al respecto**

- [Bower/bower #2298: Consider deprecating Bower](https://github.com/bower/bower/issues/2298#issuecomment-289846310)
- [Bower is dead, long live npm. And Yarn. And webpack in snyk.io/blog by Assaf Hefetz](https://snyk.io/blog/bower-is-dead/)
- [Reddit: Is bower dead? Should we start using other dependency managers?](https://www.reddit.com/r/javascript/comments/5ls30m/is_bower_dead_should_we_start_using_other/)
- [Quora: Is Bower dying?](https://www.quora.com/Is-Bower-dying?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

### La nueva generación

**Paso 1: Tus herramientas son las de siempre**
- [NPM](https://www.npmjs.com/features)
- [YARN](https://yarnpkg.com/en/)
- [webpack](https://webpack.js.org/concepts/)

**Paso 2: Pasar del `bower.json` al `package.json`**

**Paso 3: Deja de usar `wiredep` y empieza a usar solamente `require()`**

_Nota: Esto es al estilo Browserify exclusivamente_

- [wiredep: Wire Bower dependencies to your source code](https://github.com/taptapship/wiredep)
- [browserify: browser-side require() the node.js way](https://github.com/browserify)
- Debes instalar browserify de forma global con `npm install -g browserify`
- Ejemplo de carga de dependencias
  ```javascript
  var $ = require('jquery'),
      _ = require('lodash'),
      angular = require('angular');
  //..
  ```
- Puedes comprimir y unificar todo el JS en un solo comando `browserify app.js -o bundle.js` y en un único fichero `<script src="bundle.js"></script>`
- Si ademas instalas [watchify](https://github.com/substack/watchify) con `watchify app.js -o bundle.js` refescas los cambios en tiempo real.

**Extra 1: Cosas Interesantes**
- [Usar el campo `browser` en el `package.json`](https://github.com/substack/node-browserify#browser-field)

**Extra 2: Un mundo de información te espera**

- [Why We Should Stop Using Bower – And How to Do It](https://gofore.com/stop-using-bower/)
- [Browserify VS Webpack - JS Drama](http://blog.namangoel.com/browserify-vs-webpack-js-drama)
- [npm and front-end packaging](http://blog.npmjs.org/post/101775448305/npm-and-front-end-packaging)
- [The jQuery Module Fallacy](https://www.evernote.com/shard/s93/sh/390d6836-8797-4f0c-a7c2-fc77fbb0a9b8/649f084e90bae42f)