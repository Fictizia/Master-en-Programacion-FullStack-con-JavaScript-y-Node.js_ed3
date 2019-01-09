
(() => {


function capitalizeIt(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function camarasDGT(camaras) {
  // @see: https://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=8803c23866b93410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default
  var camara = camaras[Math.floor(Math.random()*camaras.length)];
  return "http://informo.munimadrid.es/cameras/Camara"+camara+".jpg"
}

// @TODO: NO SE USA?
function horaEstimada(diff) {
  return new Date().getHours() - diff;
}

function diaSemana(incremento) {
  var dia = new Date();
  dia.setDate(dia.getDate() + (incremento || 0));
  dia = dia.getDay();
  var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  return semana[dia];
}


function errorDatos(error) {
  document.getElementById("cargando").style.display = 'none';
  document.getElementById("error-ajax").style.display = 'block';
  document.getElementById("principal").innerHTML = '<img alt="bugazo..." src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/404-error.png">';
  console.error("ERROR! 404", error);
}

function colMeteoTpl (colData, y) {
  const hora = colData.dt_txt;
  return `<div><h6><strong>${diaSemana(y)} (${hora.substring(11, 16)})</strong></h6>
      <i class="owf owf-${colData.weather[0].id} owf-5x owf-pull-left owf-border"></i>
      <strong>${capitalizeIt(colData.weather[0].description)}</strong><br>
      Temp ${colData.main.temp}°C<br>
      Min ${colData.main.temp_min}°C Max ${colData.main.temp_max}°C<br>
      H ${colData.main.humidity}% - ${colData.main.pressure} psi</div>`
}

function mainMeteoTpl (data, camaras) {
  return `div><i class="owf owf-${data.weather[0].id} owf-12x owf-pull-left azul-madrid"></i>
          <strong class="azul-madrid" id="cabecera-meteo">${capitalizeIt(data.weather[0].description)}</strong><br>
          ${data.main.temp}°C<br>
          Min ${data.main.temp_min}°C | Max ${data.main.temp_max}°C<br>
          Hum ${data.main.humidity} + % | Pres ${data.main.pressure} psi<br>
          Viento ${data.wind.deg}° | ${data.wind.speed} km/h</div><br>
          <div><img id="camara-trafico" src="${camarasDGT(camaras)}"></div>`;
}

function meteoRender (datosCrudos, camaras){
  var datos = datosCrudos.list;
  for (var i = 0, x = 1; i < datos.length; i += 8, x++) {
      if (x !== 1 && x <= 5) {
          const colNmbr = x - 1;
          document.getElementById(`col${colNmbr}`).innerHTML = colMeteoTpl(datos[i], colNmbr);
      } else {
          document.getElementById("colAhora").innerHTML = mainMeteoTpl(datos[i], camaras);
      }
  }
}


function pollutionIteration (parametro) {

  if(typeof(parametro) === "object"){
      var ultimaMedicion = "ERROR";
      var timeDiff = horaEstimada(2)
      if(Array.isArray(parametro.values) && typeof(parametro.values[timeDiff]) === "object" && parametro.values[timeDiff].estado === "Pasado") {
        ultimaMedicion = parametro.values[timeDiff].valor
      }
      return "<p><strong>" + parametro.parameter + " ("+parametro.abrebiation+"):</strong> " + ultimaMedicion + " μg/m3 <em>medido por " + parametro.technique + "</em></p>";
  }
}

function pollutionRender (datosContaminacion) {

  var contaminacion = "<h3>Datos de "+datosContaminacion.name+". Estación "+datosContaminacion.id+"</h3>";                     
  for (var elemento in datosContaminacion){
      contaminacion += pollutionIteration(datosContaminacion[elemento])
  }
  document.getElementById("colContaminacion").innerHTML = contaminacion;

}



function peticionAjax (url){

  return new Promise (function (resolve, reject) {

      const xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4) {
          if (xmlHttp.status >= 100 && xmlHttp.status <= 300) {
            resolve(JSON.parse(xmlHttp.responseText))
          } else {
            reject(xmlHttp.responseText)
          }

        }
      }
      xmlHttp.open("GET", url, true);
      xmlHttp.send();
  })
}


// Arrancando

var estacion = "S024"; 
var urls = ["http://airemad.com/api/v1/weather/"+estacion, "http://airemad.com/api/v1/pollution/"+estacion, "camaras.json"]

Promise.all(urls.map(peticionAjax))
  .then(function(data){
    const [meteoData, pollutionData, camaras] = data
    console.log("data:", data)
    meteoRender(meteoData, camaras);
    pollutionRender(pollutionData);

    document.getElementById("cargando").style.display = 'none';
    document.getElementsByClassName("row")[0].style.display = 'block';
    document.getElementsByClassName("row")[1].style.display = 'block';

  })
  .catch(errorDatos)
})();