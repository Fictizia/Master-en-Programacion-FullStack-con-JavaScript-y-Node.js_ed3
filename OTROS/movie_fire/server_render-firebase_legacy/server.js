const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    helmet = require('helmet'),
    addRequestId = require('express-request-id')(),
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'pug');


//Rutas
app.get('/', routes.getAllFilms);
app.get('/create/:name', routes.createFilm);

app.get('/film/:id', routes.getFilm);
app.post('/film/:id/delete', routes.destroyFilm);
app.post('/film/:id/update',routes.updateFilm);

// Puerto
app.listen(config.port);
