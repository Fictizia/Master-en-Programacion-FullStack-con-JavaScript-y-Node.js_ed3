![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 86

### puppeteer
![banner promocional](../assets/clase86/18774be3-78ac-421e-ac28-cfe0733a2d68.png)

**Recursos**
- [A Guide to Automating & Scraping the Web with JavaScript (Chrome + Puppeteer + Node JS)](https://codeburst.io/a-guide-to-automating-scraping-the-web-with-javascript-chrome-puppeteer-node-js-b18efb9e9921)
- [Carmen Bourlon | OKC.js | Web Scraping With NodeJS and Puppeteer| Charla](https://www.youtube.com/watch?v=ARt3zDHSsd4) 
- [Carmen Bourlon | OKC.js | Web Scraping With NodeJS and Puppeteer| Slides](https://carmalou.com/intro-to-puppeteer) 
- [Web Scraping with Node.js & Puppeteer (🌋 rants included, no extra charge)](https://www.youtube.com/watch?v=pixfH6yyqZk)
- [Web Scraping with Puppeteer, NodeJS & Shopify](https://www.youtube.com/watch?v=IvaJ5n5xFqU)
- [An Introduction to Web Scraping with Puppeteer](https://medium.com/swlh/an-introduction-to-web-scraping-with-puppeteer-3d35a51fdca0)
- [Getting started with Puppeteer and Chrome Headless for Web Scraping](https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e)
- [Web Scraping with Puppeteer and NodeJS](https://www.scrapehero.com/how-to-build-a-web-scraper-using-puppeteer-and-node-js/)
- [Scraping with Puppeteer](http://toddhayton.com/2018/08/01/scraping-with-puppeteer/)


### Ejemplos: 

**Tomar una captura de pantalla de una web**

```js
const puppeteer = require('puppeteer');

async function getPic(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1000, height: 500}) // Que tamaño?
  await page.goto(url);
  await page.screenshot({path: `${url}-${new Date().getTime()}.png`});
  await browser.close();
}

getPic("https://fictizia.com");
```

**Generemos un PDF**
```js
//@see: https://github.com/GoogleChrome/puppeteer/blob/master/examples/pdf.js
const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  // page.pdf() is currently supported only in headless mode.
  // @see https://bugs.chromium.org/p/chromium/issues/detail?id=753118
  await page.pdf({
    path: 'hn.pdf',
    format: 'letter'
  });

  await browser.close();
})();
```

**¡Automaticemos cosas!**

```js
//@see: https://github.com/checkly/puppeteer-examples/blob/master/3.%20login/github.js
const puppeteer = require('puppeteer')
const screenshot = 'github.png';
(async () => {
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  await page.goto('https://github.com/login')
  await page.type('#login_field', process.env.GITHUB_USER)
  await page.type('#password', process.env.GITHUB_PWD)
  await page.click('[name="commit"]')
  await page.waitForNavigation()
  await page.screenshot({ path: screenshot })
  browser.close()
  console.log('See screenshot: ' + screenshot)
})()
```


**¡Hagamos scraping!**
```js
// Finds accommodations in Berlin on Booking.com, takes a screenshot and logs the top 10.
// @see: https://github.com/checkly/puppeteer-examples/blob/master/2.%20search/booking.js

const puppeteer = require('puppeteer')
const screenshot = 'booking_results.png'
try {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://booking.com')
    await page.type('#ss', 'Berlin')
    await page.click('.sb-searchbox__button')
    await page.waitForSelector('#hotellist_inner')
    await page.screenshot({ path: screenshot })
    const hotels = await page.$$eval('span.sr-hotel__name', anchors => {
      return anchors.map(anchor => anchor.textContent.trim()).slice(0, 10)
    })
    console.log(hotels)
    await browser.close()
    console.log('See screenshot: ' + screenshot)
  })()
} catch (err) {
  console.error(err)
}

```

**Más ejemplos**
- [Scrapper Básico de Github Issues con puppeteer #86](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/86)
- [Scraper tareas de un usuario en Github #87](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/87)
- [OSWeekends/peluditos-project: Ejemplo rápido para scrapear Adopta Madrid #7](https://github.com/OSWeekends/peluditos-project/issues/7)
- [Slack Report Feature | vanity.osweekends.com](https://github.com/OSWeekends/vanity.osweekends.com/blob/master/scheduled_tasks/slack.js)



### Scraping épico para gente sin APIs - Ulises Gascón | T3chFest 2018

![banner promocional de la charla](../assets/clase86/96c4c8c6-ab93-4ece-8717-a4ebd10e4b88.png)

**Recursos**
- [Info](https://t3chfest.uc3m.es/2018/programa/scraping-epico-para-gente-sin-apis/)
- [Vídeo en Youtube](https://www.youtube.com/watch?v=-Gtv6BMvcgM)
- [Slides](http://cyber-nomads.slides.com/ulisesgascon/scraping-t3chfest-2018#/)



### Ejercicio:

**1 -** Sacar los IDs, nombres y años de las películas de IMBD, buscando por Peliculas.
```javascript
    /*
    Ejemplo: https://www.imdb.com/find?ref_=nv_sr_fn&q=hulk&s=tt&exact=true
    [
        {
            "link": "https://www.imdb.com/title/tt0286716",
            "title": "Hulk (2003)",
            "id": "tt0286716",
            "text": "Hulk (2003)"
        },
        {
            "link": "https://www.imdb.com/title/tt0099387",
            "title": "La muerte de La Masa (1990)",
            "id": "tt0099387",
            "text": "La muerte de La Masa (1990) (TV Movie)\naka \"A Morte do Incrível Hulk\""
        },
        {
            "link": "https://www.imdb.com/title/tt0352416",
            "title": "Hulk (2003)",
            "id": "tt0352416",
            "text": "Hulk (2003) (Video Game)"
        },
        {
            "link": "https://www.imdb.com/title/tt0206488",
            "title": "Hulk (1966)",
            "id": "tt0206488",
            "text": "Hulk (1966) (TV Series)"
        },
        {
            "link": "https://www.imdb.com/title/tt9670082",
            "title": "Hulk (2015)",
            "id": "tt9670082",
            "text": "Hulk (2015) (Short)"
        },
        {
            "link": "https://www.imdb.com/title/tt1979549",
            "title": "Hulk (2011)",
            "id": "tt1979549",
            "text": "Hulk (2011) (TV Episode)\n- Season 8 | Episode 7\n- DVD on TV (2004) (TV Series)"
        },
        {
            "link": "https://www.imdb.com/title/tt7317314",
            "title": "Hulk (2014)",
            "id": "tt7317314",
            "text": "Hulk (2014) (TV Episode)\n- Season 1 | Episode 24\n- MovieBerto (2014) (TV Series)"
        },
        {
            "link": "https://www.imdb.com/title/tt7015224",
            "title": "Hulk (2017)",
            "id": "tt7015224",
            "text": "Hulk (2017) (TV Episode)\n- Season 10 | Episode 28\n- Crítico de la nostalgia (2007) (TV Series)"
        },
        {
            "link": "https://www.imdb.com/title/tt9827842",
            "title": "Hulk (2018)",
            "id": "tt9827842",
            "text": "Hulk (2018) (TV Episode)\n- Season 2 | Episode 1\n- Movies for America (2017) (TV Series)"
        },
        {
            "link": "https://www.imdb.com/title/tt0675506",
            "title": "Hulk (2003)",
            "id": "tt0675506",
            "text": "Hulk (2003) (TV Episode)\n- Season 2 | Episode 10\n- Player$ (2002) (TV Series)"
        }
    ]
    */
    
    // Tu solución
```

**2 -** Sacar las peliculas relacionadas desde los detalles de una película
```javascript
    /*
    Ejemplo: https://www.imdb.com/title/tt0099387/?ref_=fn_tt_tt_2
    [
        {
            "name": "El juicio del increíble Hulk",
            "url": "https://www.imdb.com/title/tt0098512/?ref_=tt_rec_tti",
            "id": "tt0098512"
        },
        {
            "name": "El regreso del increíble Hulk",
            "url": "https://www.imdb.com/title/tt0095368/?ref_=tt_rec_tti",
            "id": "tt0095368"
        },
        {
            "name": "La Masa",
            "url": "https://www.imdb.com/title/tt0077031/?ref_=tt_rec_tti",
            "id": "tt0077031"
        },
        {
            "name": "Hulk",
            "url": "https://www.imdb.com/title/tt0206488/?ref_=tt_rec_tti",
            "id": "tt0206488"
        },
        {
            "name": "The Incredible Hulk",
            "url": "https://www.imdb.com/title/tt0115215/?ref_=tt_rec_tti",
            "id": "tt0115215"
        },
        {
            "name": "Captain America",
            "url": "https://www.imdb.com/title/tt0206474/?ref_=tt_rec_tti",
            "id": "tt0206474"
        },
        {
            "name": "Captain America",
            "url": "https://www.imdb.com/title/tt0078937/?ref_=tt_rec_tti",
            "id": "tt0078937"
        },
        {
            "name": "Spiderman",
            "url": "https://www.imdb.com/title/tt0076975/?ref_=tt_rec_tti",
            "id": "tt0076975"
        },
        {
            "name": "Spider-Man. El desafío del Dragón",
            "url": "https://www.imdb.com/title/tt0077328/?ref_=tt_rec_tti",
            "id": "tt0077328"
        },
        {
            "name": "Captain America",
            "url": "https://www.imdb.com/title/tt0036697/?ref_=tt_rec_tti",
            "id": "tt0036697"
        },
        {
            "name": "The Incredible Hulk",
            "url": "https://www.imdb.com/title/tt0083430/?ref_=tt_rec_tti",
            "id": "tt0083430"
        },
        {
            "name": "Captain America II: Death Too Soon",
            "url": "https://www.imdb.com/title/tt0078938/?ref_=tt_rec_tti",
            "id": "tt0078938"
        }
    ]
    */
    
    // Tu solución
```


