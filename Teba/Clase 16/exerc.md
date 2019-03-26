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
function ajaxHandler(url, cb) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          let titleContent = document.createElement('h2');
            titleContent.innerText = `The weather in ${data.name} city`;

            let celsius = (data.main["temp"] - 273.15).toFixed();
            let weatherInfo = document.createElement('h3');
            weatherInfo.innerText = `Weather description: ${data.weather[0]["description"]} and a temperature of ${celsius}C`;

          cb(false, data);
        } else {
          cb(true, request.status);
        }
      }
    };
    request.open("GET", url, true);
    request.send();
  }
  
  ajaxHandler("https://api.openweathermap.org/data/2.5/weather?id=3117735&appid=7b78845a0df1e4953e14ca11e13c073d", (err, data) => {
    err ? console.log("ERROR! Algo falla...") : data;
  });
```




