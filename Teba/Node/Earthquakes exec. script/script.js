// Instructions: to find the list of earthquakes for the last our, please write in your terminal 'node script.js {param}'
// For {param}: all || significant || 4.5 || 2.5 || 1.0

const params = process.argv;
const magnitude = params[2];
const validParams = [
    'all',
    'significant',
    '4.5',
    '2.5',
    '1.0'
]

if(!validParams.includes(magnitude)){
    console.log('Param not found. Please use: all, significant, 4.5, 2.5 or 1.0')
    process.exit();
}

const https = require('https');
const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_hour.geojson`

function showResults(data, res, magnitude){
    let earthquakeInfo = data.features;
    let earthquakeList = '';
    earthquakeInfo.forEach(element => {
        let earthquakeItem = `*****************************
        USGS ${magnitude} Earthquakes, Past Hour
        ---------------------  
        total: ${earthquakeInfo.length}
        https status code: ${res.statusCode}
        ---------------------     
        ==============================
        M ${element.properties.mag} - ${element.properties.place}
        Magnitud: ${element.properties.mag}
        Estatus: ${element.properties.status}
        Tipo: ${element.properties.type}
        Lugar: ${element.properties.place}
        Coordenadas: -${element.geometry.coordinates[0]} , ${element.geometry.coordinates[1]}
        Info: ${element.properties.url}
        Detalles: ${element.properties.detail}
        ==============================`
        earthquakeList += earthquakeItem;
    }) 
    console.log(earthquakeList);
}

let data = '';
https.get(url, res => {
    if (res.statusCode === 200 ) {  
        console.log(`Sin errores en ${url}`);
    } 
    res.on('data', function(chunk) {
        data += chunk;
      });
    res.on('error', e => { 
        console.log(`Con errores -> La respuesta de ${url} es ${e.message}`); 
    });
    res.on('end', () => console.log(showResults(JSON.parse(data), res, magnitude)));
});
    