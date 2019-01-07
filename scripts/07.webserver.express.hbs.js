const express = require('express');
const app = express();

const hbs = require('hbs');

// Exoress HBS engine
hbs.registerPartials(__dirname + '/views/shared');
app.set('view engine', 'hbs');

// de esta manera importamos todo el contenido de un js
require('./hbs/helpers'); 

// con path / cargamos index.hbs, lo renderizamos, y pasamos los datos name y mydate
app.get('/', (req, res) => {
    res.render('index', {
        name: 'jose luis garcía',
        mydate: new Date().toDateString()

    })
})

app.get('/about', (req, res) => {
    res.render('otra', {
        name: 'Jose Luis García',
        mydate: new Date().toDateString()

    })
})

console.log('escuchando en el puerto 4000');
app.listen(4000);