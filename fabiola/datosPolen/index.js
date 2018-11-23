'use strict';

(function () {
  const datosPolen = {};
  const url = 'http://airemad.com/api/v1/pollen';
  const contenedor = document.querySelector('.container');
  datosPolen.getDatos = function (url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        datosPolen.processResponse(JSON.parse(xmlHttp.responseText));
      }
      else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
        console.error('ERROR! 404');
        console.info(JSON.parse(xmlHttp.responseText));
      }
    };
    xmlHttp.open('GET', url, true);
    xmlHttp.send();
  };

  datosPolen.processResponse = function (datos) {
    const datosFinales = datos
      .reduce(function (acc, currItem) {
        let templateText = {};
        templateText.name = currItem.name;
        let valores = { ...currItem.parametros };
        let mediciones = { ...currItem.mediciones };

        for (let med in mediciones) {
          if (valores.hasOwnProperty(med)) {
            valores[med] = {
              ...valores[med],
              fecha: mediciones[med].fecha,
              valor: mediciones[med].valor,
              resumen: mediciones[med].resumen
            };
          }
        }
        templateText.valores = valores;
        acc.push(templateText);

        return acc;
      }, [])
      .map(function (barrio) {
        let nombre = barrio.name;
        let valores = barrio.valores;
        const template = `
        <h3 class='subTitle'>${nombre}</h3>
        <div class="values">
        ${datosPolen.getValores(valores)}
        </div>
        `;
        return template;
      })
      .join('');
    contenedor.innerHTML = datosFinales;
  };

  datosPolen.getValores = function (valores) {
    let valTemplate = Object.keys(valores)
      .map(function (valor) {
        let fecha = valores[valor].fecha;
        fecha = new Date(fecha).toDateString();
        let tableTemplate = `<div class="card">
          <h4>${valor}</h4>
          <p>Nivel medio: ${valores[valor].medio}</p>
          <p>Nivel alto: ${valores[valor].alto}</p>
          <p>Nivel muy alto: ${valores[valor].muy_alto}</p>
          <p>Fecha: ${fecha}</p>
          <p>Valor: ${valores[valor].valor}</p>
          <p>Resumen: ${valores[valor].resumen}</p>
        </div>`;
        return tableTemplate;
      })
      .join('');
    return valTemplate;
  };

  datosPolen.getDatos(url);

  return datosPolen;
})();
