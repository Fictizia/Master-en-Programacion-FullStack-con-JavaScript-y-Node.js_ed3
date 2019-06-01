const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    helmet = require('helmet'),
    addRequestId = require('express-request-id')(),
    path = require('path'),
    config = require('./config'),
    routes = require('./routes/films'),
    app = express();

//Logger
//@see: https://medium.com/@tobydigz/logging-in-a-node-express-app-with-morgan-and-bunyan-30d9bf2c07a
const loggerFormat = ':id [:date[web]] ":method :url" :status :response-time ms';

app.use(addRequestId);

morgan.token('id', req => req.id);

app.use(morgan(loggerFormat, {
    skip: (req, res) => res.statusCode < 400,
    stream: process.stderr
}));

app.use(morgan(loggerFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: process.stdout
}));

//Middelware
app.use(helmet());
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static('public'));

//Rutas
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api/films', routes.getAllFilms);
app.get('/api/films/:id', routes.getFilm);

app.post('/api/films', routes.createFilm);
app.put('/api/films', routes.updateFilm);
app.delete('/api/films', routes.destroyFilm);
    

// Puerto
app.listen(config.port);