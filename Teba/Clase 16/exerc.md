#### 1 - Sacar en el html los [datos de polen](http://airemad.com/api/v1/pollen)

```js
function ajaxHandler(url, cb) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);

                data.forEach(function(station, i, data){
                	let titleContent = document.createElement('h2');
                	titleContent.innerText = `${station.name}`;
                	let unorderedList = document.createElement('ul');
                		
                		for(const medicion in station.mediciones){
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
