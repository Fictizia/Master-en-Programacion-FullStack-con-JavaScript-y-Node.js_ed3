const express = require('express');
const {port} = require("./config");
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('./public/index/html');
  });

app.get('/api/movies', (req, res, next) => {
    res.json([{id: "01"}, {id: "02"}]);
});

app.get('/api/movies/:id', (req, res, next) => {
    res.json({id: req.params.id});
});

app.post('/api/movies', (req, res, next) => {
    let title = req.body.title;
    res.status(200).send({ title });
});

app.put('/api/movies', (req, res, next) => {
    let {title, id} = req.body
    res.status(200).send({title, id});
});

app.delete('/api/movies', (req, res, next) => {
    let id = req.body.id;
    res.status(200).send({ id });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})