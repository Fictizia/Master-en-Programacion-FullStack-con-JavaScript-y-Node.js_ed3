![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-fullstack-con-JavaScript-y-Node.js_ed2.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 92


### End To End (E2E) con Nodejs

![IMG](../assets/clase92/ae74668e-b60f-43f9-a1e3-8f7a7a4cfb6e.gif)

**Librerías Clásicas**
- [WebDriverJs](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) - WebDriverJs is the Official javascript implementation of selenium. It uses to Selenium’s Json-wire-protocol to interact with browser. It is written by selenium guys.
- [WebdriverIO](http://webdriver.io/) - Webdriver IO is a selenium wrapper written in javascript and runs on node.js. It is a custom implementation of W3C webdriver protocol.
- [Protractor](http://www.protractortest.org/#/) - Protractor is an End-to-End test framework for Angular Js applications. It is packaged under npm and runs on NodeJs.
- [Nightwatch.js](http://nightwatchjs.org/) - Nightwatch.js is a Node.js based End-to-End (E2E) testing solution. It uses the powerful W3C WebDriver API to perform actions on DOM elements.
- [Dalek.js](http://dalekjs.com/) - Automated cross browser testing with JavaScript
- [Nemo](http://nemo.js.org/) - Launch your web sites & applications with confidence
- [TestCafe](https://devexpress.github.io/testcafe/) - A node.js tool to automate end-to-end web testing
- [Nightmare](http://www.nightmarejs.org/) - A high-level browser automation library.
- [Hermione](https://github.com/gemini-testing/hermione#hermione) - Browser test runner based on mocha and wdio
- [Chromeless](https://github.com/graphcool/chromeless) - 🖥 Chrome automation made simple. Runs locally or headless on AWS Lambda. 
- [Chrominator ](https://github.com/jesg/chrominator) - high level api to the chrome remote debugger
- [Chromy](https://github.com/OnetapInc/chromy) - Chromy is a library for operating headless chrome. 🍺🍺🍺
- [Navalia](https://github.com/joelgriffith/navalia) - A bullet-proof, fast, and reliable headless browser API
- [Lambdium](https://github.com/smithclay/lambdium) - headless chrome + selenium webdriver in AWS Lambda using the serverless application model
- [GhostJS](https://github.com/KevinGrandon/ghostjs) - ghostjs provides modern UI testing with async functions
- [CasperJS](http://casperjs.org/) - Navigation scripting & testing for PhantomJS and SlimerJS
- [Cypress.io](https://github.com/cypress-io/cypress) - Fast, easy and reliable testing for anything that runs in a browser.


**Recursos**
- [End-to-End Testing With Puppeteer](http://dsheiko.com/weblog/end-to-end-testing-with-puppeteer)
- [End-to-end Tests that Don’t Suck with Puppeteer](https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/)
- [Unit test vs. Integration test](https://medium.com/android-testing-daily/unit-test-vs-integration-tes-fba13b92fbf6)


### La revolución
![img](../assets/clase92/c545ed5f-f07b-4d70-9936-b5a8a684e35d.png)

**Uso soluciones clásicas (Selenium, etc...)?**
- Necesito testear en más de un navegador
- Necesito testear en un único navegador pero no es Chrome

**Uso Puppeteer?**
- Solo necesito testear en Chrome
- [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- [Jest](https://jestjs.io/)

### Otros Test con Nodejs
**Librerias y utlilidades**
- [Supertest](https://github.com/visionmedia/supertest) - Super-agent driven library for testing node.js HTTP servers using a fluent API
- [Faker.js](https://github.com/marak/Faker.js/) - generate massive amounts of fake data in Node.js and the browser
- [Frisby](http://frisbyjs.com/) - The Easiest REST API Testing Framework Out There
- [Gemini](https://gemini-testing.github.io/) - Gemini is a utility for regression testing the visual appearance of web pages.
- [Gremlins.js](https://github.com/marmelab/gremlins.js) - Monkey testing library for web apps and Node.js
- [Mailosaur](https://github.com/mailosaur/mailosaur-node) - Mailosaur Node.js Client Library
- [Differencify](https://github.com/NimaSoroush/differencify) - Differencify is a library for visual regression testing
- [CodeceptJS](http://codecept.io/) - Modern era acceptance testing for Nodejs


### Benchmarking
![img](../assets/clase92/d1967de0-98aa-4d10-9d74-09dd946acf11.jpeg)

**Librerias**
- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - Benchmarking library that supports high-resolution timers and returns statistically significant results.
- [matcha](https://github.com/logicalparadox/matcha) - Simplistic approach to benchmarking.

**Ejemplo**
```javascript
const suite = new Benchmark.Suite;

// add tests
suite.add('RegExp#test', () => {
  /o/.test('Hello World!');
})
.add('String#indexOf', () => {
  'Hello World!'.includes('o');
})
.add('String#match', () => {
  !!'Hello World!'.match(/o/);
})
// add listeners
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log(`Fastest is ${this.filter('fastest').pluck('name')}`);
})
// run async
.run({ 'async': true });
```


### Mobile test automation

![IMG](../assets/clase92/ff65149e-6102-4c4f-98c5-157128bfb2b8.png)

**Librerías**
- [WebdriverIO's Appium implementation](http://webdriver.io/api/appium/backgroundApp.html)
- [Macaca](https://macacajs.com/)

### UI test automation

[![IMG](../assets/clase92/daa62692-2a69-41e2-9021-a6aacf90ac93.jpeg)](https://www.youtube.com/watch?v=fsF7enQY8uI)

**Librerías**
- [sikulix](http://www.sikulix.com/) 
- [robotjs](https://robotjs.io/)


### Ejercicio

**1 -** Inspecciona el código detras de [tastejs/todomvc/tree/master/tests](https://github.com/tastejs/todomvc/tree/master/tests) para entender como testear todas las apps de TODOMVC.