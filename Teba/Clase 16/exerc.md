#### 1 - Sacar en el html los [datos de polen](http://airemad.com/api/v1/pollen)

```js







 /**
 * @callback requestCallback
 * @param {boolean} err - has an error true/false
 * @param {object|boolean} data - The information/response from the server
 */
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
        err ? console.log("ERROR! Algo falla...") : console.log(data);
    });
    
```
