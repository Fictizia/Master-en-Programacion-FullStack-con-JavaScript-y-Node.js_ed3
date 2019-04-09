
// Selectores
const pollutionSlctr = document.getElementById('pollution-details');
const trafficSlctr = document.querySelector('.traffic-section');
const todayWeatherSlctr = document.querySelector('.weather-section');
const forecastSlctr = document.querySelector('.forecast-section');


// Functions

function lastValue(values){
    const passedValues = values.filter(value => value.estado === "Pasado");
    
    if(passedValues.length > 0){
        return passedValues[passedValues.length -1].valor
    } else {
        return 0
    }
}

function renderPollution (data) {
    let htmlContent = "";
    for (const prop in data) {
        if(prop !== 'id' && prop !== 'name'){
            htmlContent += `<p>
            <strong>${data[prop].parameter} (${data[prop].abrebiation})</strong> 
            ${lastValue(data[prop].values)}mg/m3 medido por ${data[prop].technique}
            </p>`
        }
    }
    pollutionSlctr.innerHTML += htmlContent;
}

function renderTraffic (data) {
    const item = getRandomImages(data);
    let imagesHtml = `<img class="traffic-pic" src="${item.url}" alt="traffic camara ${item.name} location"></img>`;
    trafficSlctr.innerHTML = imagesHtml;
}

function getRandomImages(data) {
    let item = data[Math.floor(Math.random()*data.length)];
    return item;
}


function renderTodayWeather(data) {
    let weatherCard = `<i class="owf owf-${data.list[0].weather[0].id} owf-3x owf-pull-center owf-border"></i>
    <div class="weather-info">
      <p><strong>Hoy</strong></p>
      <p>T. ${data.list[0].main.temp.toFixed(1)}°C ${data.list[0].weather[0].description}</p>
      <p>Min ${data.list[0].main.temp_min.toFixed(1)}°C | Max ${data.list[0].main.temp_max.toFixed(1)}°C</p>
    </div>`
    todayWeatherSlctr.innerHTML = weatherCard;
}


function getForecastDay(day) {
    var weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    var d = new Date(day);
    return weekday[d.getDay()];
}

function renderForecast(data) {
    // Objeto JSON.list son los arrays con la info que queremos
    // Con un for iterar sobre los objetos del array desde la posición 0, suḿandole a cada vuelta i+=8
    // En cada objeto, acceder a: data.list[0].main.temp, data.list[0].main.temp_min, data.list[0].main.temp_max, 
    // data.list[0].weather[0].description, data.list[0].weather[0].id (para los iconos)
    for(let i=8; i< data.list.length; i+=8){
        let n = getForecastDay(data.list[i].dt_txt);
        let forecastCard = `<i class="owf owf-${data.list[i].weather[0].id} owf-3x owf-pull-center owf-border"></i>
        <div class="forecast-item">
          <p><strong>${n}</strong></p>
          <p>T. ${data.list[i].main.temp.toFixed(1)}°C ${data.list[i].weather[0].description}</p>
          <p>Min ${data.list[i].main.temp_min.toFixed(1)}°C | Max ${data.list[i].main.temp_max.toFixed(1)}°C</p>
        </div>`
        forecastSlctr.innerHTML += forecastCard;
    }
}

function getJson (url) {
    return fetch(url).then(r => r.json())
}

const urlList = ['http://airemad.com/api/v1/pollution/S038', 'data/camaras.json', 'http://airemad.com/api/v1/weather/S038']

Promise.all(urlList.map(url => getJson(url)))
    .then(data => {
        console.log(data)
        renderTraffic(data[1])
        renderPollution(data[0])
        renderTodayWeather(data[2])
        renderForecast(data[2])
    })
    .catch(err => console.log("ERROR! No hay datos....", err))