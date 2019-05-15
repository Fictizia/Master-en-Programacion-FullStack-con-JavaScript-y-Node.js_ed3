const http = require('http');
const PORT = 3001;
const url = require('url');

function handleRequest(req, res){
    const pathname = url.parse(req.url).pathname;
    if(pathname === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html ; charset=utf-8'
        });
        res.write('<h1>Estás es nuestra Home</h1>');
        res.end();
    } else if(pathname === '/quienes_somos'){
        res.writeHead(200, {
            'Content-Type': 'text/html ; charset=utf-8'
        });
        res.write('<h1>Estás en quiénes somos</h1>');
        res.end();
    } else if (pathname === '/donde_estamos'){
        res.writeHead(200, {
            'Content-Type': 'text/html ; charset=utf-8'
        });
        res.write('<h1>Estás en dónde estamos</h1>');
        res.end();
    } else if (pathname === '/que_hacemos'){
        res.writeHead(200, {
            'Content-Type': 'text/html ; charset=utf-8'
        });
        res.write('<h1>Estás en qué hacemos</h1>');
        res.end();
    } else if (pathname === '/contacto'){
        res.writeHead(200, {
            'Content-Type': 'text/html ; charset=utf-8'
        });
        res.write('<h1>Contacta con nosotras</h1>');
        res.end();
    } else {
        res.writeHead(404);
        res.end('Error, la url no existe');
    }
    res.end(`Server working properly. Requested URL: ${url}`)
}

const myServer = http.createServer(handleRequest);

myServer.listen(PORT, ()=>{
    console.log(`Server listening on: http://localhost:${PORT}`)
});