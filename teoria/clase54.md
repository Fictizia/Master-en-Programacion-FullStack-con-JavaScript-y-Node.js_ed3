![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 54


### NPM Scripts

![img](../assets/clase54/e13493c3-9396-40f1-878d-12e21091c38c.png)

**Recursos**
- [Why I Left Gulp and Grunt for npm Scripts by Cory House](https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)
- [Task automation with npm run by James Holliday](http://substack.net/task_automation_with_npm_run)
- [Advanced front-end automation with npm scripts by Kate Hudson](https://www.youtube.com/watch?v=0RYETb9YVrk)
- [How to use npm as a build tool by Kieth Cirkel](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Introduction to npm as a Build Tool by Marcus Hammarberg](http://app.pluralsight.com/courses/npm-build-tool-introduction)
- [Gulp is awesome, but do we really need it? by Gonto](http://gon.to/2015/02/26/gulp-is-awesome-but-do-we-really-need-it/)


### NPM Scripts: Estrategias y vitaminas

- No conoces a [Ashley Williams](https://github.com/ashleygwilliams) ni has visto ["You Don't Know npm"](https://www.youtube.com/watch?v=l_F9xqIdkzE). [Slides](https://ashleygwilliams.github.io/fwdays-2017/#1)
- Existen [convenciones](https://docs.npmjs.com/misc/scripts) en el `package.json` que solemos ignorar como `preinstall`, `install`, `postinstall`, `uninstall`, `test`, `start`, etc...
- Puedes pasarte variables de entorno en los comandos `NODE_ENV=production server.js`
- Puedes ejecutar otros comandos del `package.json`, con solo mencionarlos `npm run otro-comando && echo otras cosas después...`
- Si quieres mantener soporte con todas las plataformas, debes evitar el uso de comandos de shell y abstraerlo con dependencias. Por ejemplo `rm -rf /` vs [rimraf](https://www.npmjs.com/package/rimraf)
- Puedes agrupar comandos en ficheros y siplemente ejecutarlos como una tarea más, `node fichero-comandos.js`
- No agrupes comandos complejos o muy largos, *divide y venceras*
- Recuerda que existen multiples operadores en Linux y OSX:
  - Puedes paralelismo dentro del mismo comando usando el operador `&` y no unicamente `&&`, ejemplo: `npm run watch-js & npm run watch-css`
  - Puedes unir dos tareas usando `&&`. La seguna tarea solo se ejecutará cuando la primera haya concluido con éxito, ejemplo: `npm install && npm start`
  - Puedes usar `;` para ejecutar el siguiente comando aun cuando el primero no funcionó correctamente, ejemplo: `npm run algo-raro; npm run watch-css`
  - Puedes usar `||` para ejecutar el siguiente comando solo cuando el primero no funcionó correctamente, ejemplo: `npm install-unix || npm install windows`
  - Puedes combinar comandos como `[ -f ~/fichero.txt ] && echo "el fichero existe." || touch ~/fichero.txt`, es decir, si el fichero existe me avisa, pero si no... lo crea!
- Si un comando es muy largo... solo necesitas crearte un `fichero.sh` encabezado por `#!/bin/bash` y agrupando comandos con parentesis. No te olvides de los permisos de ejecuación con `chmod +x FICHERO.sh`
```bash
#!/bin/bash
(cd site/main; echo banana)
(cd site/xyz; echo lorem ipsum...)
```

**Ejemplo**
```json
@see: https://gon.to/2015/02/26/gulp-is-awesome-but-do-we-really-need-it/
"scripts": {
  "start": "npm run build-js && npm run build-css && serve .",
  "watch": "npm run watch-js & npm run watch-css & serve .",
  
  "build-css": "rework-npm index.css | cleancss -o build/build.css",
  "build-js": "browserify --extension=.jsx --extension=.js index.js | uglifyjs > build/build.js",
  
  "watch-js": "watchify --extension=.jsx --extension=.js index.js -o build/build.js --debug --verbose",
  "watch-css": "nodemon -e css --ignore build/build.css --exec 'rework-npm index.css -o build/build.css'"
}
```

### Ejercicios 

**1 -** Migra las tareas de Gulp de tu proyecto a NPM.
```javascript
    // Tu solución
```