![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 74


### Node.js Best Practices
- [i0natan/nodebestpractices](https://github.com/i0natan/nodebestpractices) *The largest Node.JS best practices list (November 2018)*
- [Node.js Best Practices - How to Become a Better Developer in 2017](https://blog.risingstack.com/node-js-best-practices-2017/)
- [25 development practices our NodeJS developers follow](https://www.peerbits.com/blog/development-practices-for-nodejs-developers.html)
- [19 ways to become a better Node.js developer in 2019](https://medium.com/@me_37286/19-ways-to-become-a-better-node-js-developer-in-2019-ffd3a8fbfe38)

### Gestion de errores

- [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
- [Node.js Best Practices | Error Handling Practices](https://github.com/i0natan/nodebestpractices#2-error-handling-practices)
- [Building Robust Node Applications: Error Handling](https://strongloop.com/strongblog/robust-node-applications-error-handling/)
- [Joyent | Production Practices](https://www.joyent.com/node-js/production/design/errors)
- [How to prevent your Node.js process from crashing](https://medium.com/dailyjs/how-to-prevent-your-node-js-process-from-crashing-5d40247b8ab2)

### [Debugging Node.js](https://www.youtube.com/watch?v=Xb_0awoShR8)


**Librerías de Logging**

- [pino](https://github.com/pinojs/pino) *Extremely fast logger inspired by Bunyan.*
- [winston](https://github.com/winstonjs/winston) *Multi-transport async logging library.*
- [console-log-level](https://github.com/watson/console-log-level) *The most simple logger imaginable with support for log levels and custom prefixes.*
- [storyboard](https://github.com/guigrpa/storyboard) *End-to-end, hierarchical, real-time, colorful logs and stories.*
- [signale](https://github.com/klauscfhq/signale) *Hackable console logger with beautiful output.*


**Librerías de Debugging / Profiling**

- [ndb](https://github.com/GoogleChromeLabs/ndb) *Improved debugging experience, enabled by Chrome DevTools.*
- [ironNode](https://github.com/s-a/iron-node) *Node.js debugger supporting ES2015 out of the box.*
- [node-inspector](https://github.com/node-inspector/node-inspector) *Debugger based on Blink Developer Tools.*
- [debug](https://github.com/visionmedia/debug) *Tiny debugging utility.*
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) *Node.js is running but you don't know why?*
- [njsTrace](https://github.com/valyouw/njstrace) *Instrument and trace your code, see all function calls, arguments, return values, as well as the time spent in each function.*
- [vstream](https://github.com/joyent/node-vstream) *Instrumentable streams mix-ins to inspect a pipeline of streams.*
- [stackman](https://github.com/watson/stackman) *Enhance an error stacktrace with code excerpts and other goodies.*
- [locus](https://github.com/alidavut/locus) *Starts a REPL at runtime that has access to all variables.*
- [0x](https://github.com/davidmarkclements/0x) *Flamegraph profiling.*
- [ctrace](https://github.com/automation-stack/ctrace) *Well-formatted and improved trace system calls and signals.*
- [leakage](https://github.com/andywer/leakage) *Write memory leak tests.*
- [llnode](https://github.com/nodejs/llnode) *Post-mortem analysis tool which allows you to inspect objects and get insights from a crashed Node.js process.*


**Recursos**
- [Debugging Node.js with Google Chrome](https://medium.com/the-node-js-collection/debugging-node-js-with-google-chrome-4965b5f910f4)
- [Node | Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [Node Summit | Debugging in 2017 with Node.js](https://www.youtube.com/watch?v=Xb_0awoShR8)
- [Step-by-step guide to debugging NodeJS applications](https://medium.com/@fay_jai/step-by-step-guide-to-debugging-nodejs-applications-9d3c5131f937)
- [How to Debug Node.js with the Best Tools Available](https://blog.risingstack.com/how-to-debug-nodej-js-with-the-best-tools-available/)
- [Debugging Node.js con Node Inspector](https://www.genbeta.com/desarrollo/debugging-node-js-con-node-inspector)

### Aplicaciones isomórficas o universales

**[UMD](https://github.com/umdjs/umd)**
- [Módulo compatible con Node y AMD](https://github.com/umdjs/umd/blob/master/templates/nodeAdapter.js)
- [Módulo compatible con CommonJS y AMD](https://github.com/umdjs/umd/blob/master/templates/commonjsAdapter.js)
- [Plugin de Jquery que funciona con CommonJS, AMD o globals (navegador)](https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js)
- [Módulo compatible con CommonJS, AMD o globals (navegador)](https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js)
- [Módulo compatible con AMD y globals (navegador)](https://github.com/umdjs/umd/blob/master/templates/amdWeb.js)
 
**Build tools**
- [docpad-plugin-umd](https://github.com/docpad/docpad-plugin-umd) *Wrap specified JavaScript documents in the Universal Module Definition (UMD) allowing them to run in AMD, Require.js, CommonJS/Node.js and Vanilla environments automatically*
- [grunt-umd](https://github.com/bebraw/grunt-umd) *Surrounds code with the universal module definition (MIT)*
- [gulp-umd](https://github.com/eduardolundgren/gulp-umd) *Gulp plugin for build JavaScript files as Universal Module Definition, aka UMD*
- [grunt-urequire](https://github.com/aearly/grunt-urequire) *Grunt wrapper for uRequire*
- [generator-umd](https://github.com/ruyadorno/generator-umd) *An Yeoman Generator to create a basic UMD structure*

**Librerias isomórficas como ejemplo**
- [underscore](https://underscorejs.org/)
- [lodash](https://lodash.com/)
- [momentjs](https://momentjs.com/)
- [mathjs](http://mathjs.org/)

**Recursos**
- [How to write and unit-test universal JavaScript modules (browser, Node.js)](http://2ality.com/2011/08/universal-modules.html)
- [Isomorphic (Universal) JavaScript](https://medium.com/commencis/isomorphic-universal-javascript-496dc8c4341a)
- [Universal JS module loader](https://devhints.io/umdjs)
- [A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
- [How to write and build JS libraries in 2018](https://medium.com/@kelin2025/so-you-wanna-use-es6-modules-714f48b3a953)
- [Isomorphic ES Modules](https://medium.com/samsung-internet-dev/isomorphic-es-modules-151f0d9a919b)
- [Writing JS libraries less than 1TB size](https://medium.com/@kelin2025/writing-js-libraries-less-than-1tb-size-6342da0c006a)


### Variables del Entorno
	
**Librerías**
- [dotenv](https://github.com/motdotla/dotenv) *Loads environment variables from .env for nodejs projects.*
- [cross-env](https://github.com/kentcdodds/cross-env) *Set environment variables cross-platform.*

**Recursos**
- [Working with Environment Variables in Node.js](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html)
- [process.env: What it is and why/when/how to use it effectively](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7)
- [Environment Variables in Node.js](https://medium.com/@maxbeatty/environment-variables-in-node-js-28e951631801)
- [Here’s how you can actually use Node environment variables](https://medium.freecodecamp.org/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a)
- [Using dotenv package to create environment variables](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f)
- [Configuration settings in Node with dotenv](https://medium.com/@jonjam/configuration)
- [Managing Configurations in Node.JS apps with dotenv and convict](https://medium.com/@sherryhsu/managing-configurations-in-node-js-apps-with-dotenv-and-convict-d74070d37373)


### Creando ejecutables
- [node-upstarter](https://github.com/carlos8f/node-upstarter) *Easily create upstart services for your node apps*
- [diable](https://github.com/IonicaBizau/diable) 😈 *Daemonize the things out.*
- [daemonize-process](https://github.com/silverwind/daemonize-process#readme) *Daemonize the current Node.js process*
- [daemonix](https://github.com/BlueRival/daemonix) *A utility for creating daemons out of NodeJS applications.*


### Buffer
- [Do you want a better understanding of Buffer in Node.js? Check this out](https://medium.freecodecamp.org/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8)
- [Buffer en NodeJS](https://desarrolloweb.com/articulos/buffer-en-nodejs.html)
- [Nodejs Docs | Buffer](https://nodejs.org/api/buffer.html)
- [An Overview of Buffers in Node.js](http://thecodebarbarian.com/an-overview-of-buffers-in-node-js)


### Streams
- [Node.js Streams: Everything you need to know](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)
- [A Brief History of Node Streams](https://medium.com/the-node-js-collection/a-brief-history-of-node-streams-pt-1-3401db451f21)
- [NODE.JS STREAMS](https://flaviocopes.com/nodejs-streams/)
- [El manejo de streams en NodeJS](https://elabismodenull.wordpress.com/2017/03/28/el-manejo-de-streams-en-nodejs/)
- [Events and Streams in Node.js](https://codeburst.io/basics-of-events-streams-and-pipe-in-node-js-b84578c2f1be)
- [awesome-nodejs-streams](https://github.com/thejmazz/awesome-nodejs-streams)
- [Stream and Buffer Concepts in Node.js](https://medium.com/tensult/stream-and-buffer-concepts-in-node-js-87d565e151a0)
- [Node.js streams cheatsheet](https://devhints.io/nodejs-stream)

### Child Process

**Librerías**
- [execa](https://github.com/sindresorhus/execa#readme)
- [opn](https://github.com/sindresorhus/opn#readme)
- [node-worker-farm](https://github.com/rvagg/node-worker-farm)
- [spawnd](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/spawnd)

**Recursos**
- [Node.js Child Processes: Everything you need to know](https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a)
- [Understanding execFile, spawn, exec, and fork in Node.js](https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node)
- [Node.js: managing child processes](http://krasimirtsonev.com/blog/article/Nodejs-managing-child-processes-starting-stopping-exec-spawn)
- [Getting to know Node’s child_process module](https://medium.com/the-guild/getting-to-know-nodes-child-process-module-8ed63038f3fa)
- [Nodejs Doc | exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)
- [Nodejs Doc | execFile](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)
- [Nodejs Doc | fork](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)
- [Nodejs Doc | execSync](https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options)
- [Nodejs Doc | execFileSync](https://nodejs.org/api/child_process.html#child_process_child_process_execfilesync_file_args_options)
- [Nodejs Doc | spawnSync](https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options)
- [Nodejs Doc | spawn](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)



### Cluster

**Recursos**
- [Scaling Node.js Applications](https://medium.freecodecamp.org/scaling-node-js-applications-8492bd8afadc)
- [Taking Advantage of Multi-Processor Environments in Node.js](http://blog.carbonfive.com/2014/02/28/taking-advantage-of-multi-processor-environments-in-node-js/#tldr)
- [Modo cluster para node.js](http://pinchito.es/2013/modo-cluster.html)
- [How to Create a Node.js Cluster for Speeding Up Your Apps](https://www.sitepoint.com/how-to-create-a-node-js-cluster-for-speeding-up-your-apps/)
- [How to scale your Node.js server using clustering](https://medium.freecodecamp.org/how-to-scale-your-node-js-server-using-clustering-c8d43c656e8f)
- [Clustering in NodeJs — Performance Optimization](https://medium.com/tech-tajawal/clustering-in-nodejs-utilizing-multiple-processor-cores-75d78aeb0f4f)
- [Understanding the NodeJS cluster module](http://www.acuriousanimal.com/2017/08/12/understanding-the-nodejs-cluster-module.html)

**Librerias:**
- [luster](https://github.com/nodules/luster)
- [cluster-map](https://www.npmjs.com/package/cluster-map)
- [PM2](https://www.npmjs.com/package/pm2)

### Embed C/C++

**Opciones Core**
- [C++ Addons](https://nodejs.org/api/addons.html)
- [N-API](https://nodejs.org/api/n-api.html)

**Librerías**
- [node-gyp](https://github.com/nodejs/node-gyp)
- [node-bindings](https://github.com/TooTallNate/node-bindings) *Helper module for loading your native module's .node file*
- [node-gyp](https://github.com/nodejs/node-gyp) *Node.js native addon build tool* 
- [nan](https://github.com/nodejs/nan) *Native Abstractions for Node.js*

**Recursos**
- [How to call C/C++ code from Node.js](https://medium.com/@tarkus/how-to-call-c-c-code-from-node-js-86a773033892)
- [Extending Node.js with native C++ modules](https://medium.com/@marcinbaraniecki/extending-node-js-with-native-c-modules-63294a91ce4)
- [JavaScript ♥ C++: Modern Ways to Use C++ in JavaScript Projects](https://medium.com/netscape/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff)
- [NodeJS Advanced — How to create a native add-on using C++](https://medium.com/the-guild/nodejs-advanced-how-to-create-a-native-add-on-using-c-588b4f2248cc)
- [Writing cross-platform C++ is easier in Node.js than it is outside of Node.js](https://hackernoon.com/writing-cross-platform-c-is-easier-in-node-js-than-it-is-outside-of-node-js-a5c214f0cf10)
- [Native Extensions for Node.js](https://medium.com/the-node-js-collection/native-extensions-for-node-js-767e221b3d26)
- [N-API: Next generation APIs for Node.js native addons available across all LTS release lines](https://medium.com/the-node-js-collection/n-api-next-generation-apis-for-node-js-native-addons-available-across-all-lts-release-lines-4f35b781f00e)