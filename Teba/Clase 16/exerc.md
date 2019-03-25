#### 1 - Sacar en el html los [datos de polen](http://airemad.com/api/v1/pollen)

```js
// Me, trying

function renderStationParams(stations) {
	for(var station in stations){
		console.log(station.parametros);
	};
}

function ajaxHandler(url, cb) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
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
        err ? console.log("ERROR! Algo falla...") : renderStationParams(data);
    });
    
```
