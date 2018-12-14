### Old School Callbacks...
```javascript
function ajax(url, cb) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState === 4) {
		        if (xmlHttp.status === 200) {
		        	const data = JSON.parse(xmlHttp.responseText);
		            //console.info("data:", data);
		            cb(false, data)
		        } else {
		        	const err = JSON.parse(xmlHttp.responseText)
		            //console.error("ERROR:", err);
		            cb(err)
		        }
		}
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}


ajax("http://airemad.com/api/v1/station", (err, data) => {
	if(err){
		console.warn("[RES] ERR:", err)
	} else {
		console.log("[RES] DATA:", data)
	}
})
```

### AJAX... 35 (N) Llamadas en paralelo desde una primera llamada AJAX con la API de AIREMAD
```javascript
function ajax(url) {
	return new Promise((resolve, reject) => {
	    const xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState === 4) {
			        if (xmlHttp.status === 200) {
			        	const data = JSON.parse(xmlHttp.responseText);
			            resolve(data)
			        } else {
			        	const err = xmlHttp.responseText;
			            reject(err)
			        }
			}
	    };
	    xmlHttp.open("GET", url, true);
	    xmlHttp.send();
	})
}

function stationsDetails (stations) {
	return new Promise((resolve, reject) => {
		Promise.all(stations.map(station => ajax(`${baseUrl}/${station.id}`)))
			.then(resolve)
			.catch(reject)
	})
}

const baseUrl = "http://airemad.com/api/v1/station"
ajax(baseUrl)
	//.then(stations => console.log("[RES] DATA:", stationsDetails(stations)))
	.then(stationsDetails)
	.then(console.log)
	.catch(console.warn)
```

### AJAX... 100 (N) Llamadas en paralelo desde una primera llamada AJAX para la API de Github
```javascript
function ajax(url) {
	return new Promise((resolve, reject) => {
	    const xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState === 4) {
			        if (xmlHttp.status === 200) {
			        	const data = JSON.parse(xmlHttp.responseText);
			            resolve(data)
			        } else {
			        	const err = xmlHttp.responseText;
			            reject(err)
			        }
			}
	    };
	    xmlHttp.open("GET", url, true);
	    xmlHttp.send();
	})
}

function stationsDetails (members) {
	return new Promise((resolve, reject) => {
		Promise.all(members.map(member => ajax(member.url)))
			.then(resolve)
			.catch(reject)
	})
}

function renderDetail(member) {
	return `<li>${member.name} (@${member.login}) | ${member.public_repos} Public Repos | ${member.followers} Followers</li>`
}

function render(list){
	document.body.innerHTML = `<ul> ${list.map(renderDetail).join()} </ul>`
}


const orgName = "osweekends";
const membersUrl = `https://api.github.com/orgs/${orgName}/public_members`
ajax(membersUrl)
	//.then(stations => console.log("[RES] DATA:", stationsDetails(stations)))
	.then(stationsDetails)
	.then(render)
	.catch(console.warn)
```
