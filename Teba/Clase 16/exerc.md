#### 1 - Sacar en el html los [datos de polen](http://airemad.com/api/v1/pollen)

```js

function ajaxHandler(url, cb) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);

        data.forEach(function (station) {
          let titleContent = document.createElement('h2');
          titleContent.innerText = `${station.name}`;
          let unorderedList = document.createElement('ul');

          for (const medicion in station.mediciones) {
            let listItem = document.createElement('li');
            listItem.innerText = `${station.mediciones[medicion]["resumen"]}`;
          };

          unorderedList.appendchild(listItem);
        });

        cb(false, data);
      } else {
        cb(true, request.status);
      }
    }
  };
  request.open("GET", url, true);
  request.send();
}

ajaxHandler("http://airemad.com/api/v1/pollen", (err, data) => {
  err ? console.log("ERROR! Algo falla...") : console.log(data);
});
```

#### 2. - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

```js

const citiesApis = {
    Madrid: "https://api.openweathermap.org/data/2.5/weather?id=3117735&appid=${TOKEN}",
    Barcelona: "https://api.openweathermap.org/data/2.5/weather?id=6356055&appid=${TOKEN}",
    Valencia: "https://api.openweathermap.org/data/2.5/weather?id=6362115&appid=${TOKEN}"
};

for (const key in citiesApis){
    let value = citiesApis[key];
    function ajaxHandler(url, cb) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
          if (request.readyState === 4) {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              let titleContent = document.createElement('h2');
                titleContent.innerText = `The weather in ${data.name} city 🌞`;
    
                let celsius = (data.main["temp"] - 273.15).toFixed();
                let weatherInfo = document.createElement('h3');
                weatherInfo.innerText = `Weather description: ${data.weather[0]["description"]} and a temperature of ${celsius}C`;
                
                document.body.appendChild(titleContent);
                titleContent.appendChild(weatherInfo);
    
              cb(false, data);
            } else {
              cb(true, request.status);
            }
          }
        };
        request.open("GET", url, true);
        request.send();
      }
    
      ajaxHandler(`${value}`, (err, data) => {
        err ? console.log("ERROR! Algo falla...") : data;
      });
}    

```

#### 3 - Jugando con datos abiertos, saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.

```js

// @see: https://ourcodeworld.com/articles/read/188/encode-and-decode-html-entities-using-pure-javascript

function decodeHtml (str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
}

function ajaxHandler(url, cb) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);

          let mandosList = data.cuadromandos.cuadromando;
            mandosList.forEach(mando => {
                const calle = decodeHtml(mando.calle);
                if (mando.numero !== null){
                    console.log(`Calle: ${calle}\n Nº: ${mando.numero}\n Potencia watios: ${mando.potencia_w_}`);  
                } else { 
                    console.log(`Calle: ${calle}\n Nº: desconocido\n Potencia watios: ${mando.potencia_w_}`);
                };
            });

          cb(false, data);
        } else {
          cb(true, request.status);
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  }
  
  ajaxHandler("http://opendata.gijon.es/descargar.php?id=163&tipo=JSON", (err, data) => {
    err ? console.log("ERROR! Algo falla...") : data;
  });


```




























