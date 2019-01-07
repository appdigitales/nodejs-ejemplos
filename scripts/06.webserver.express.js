const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public_html'));

app.get('/datos1', (req, res) => {
    res.send('Hola mundo');
})

app.get('/datos2', (req, res) => {
    const salida = {
        status: 200,
        data: {
            name: 'Jose',
            ciudad: 'Madrid',
            sexo: 'v'
        }
    }
    res.send(salida);
})


console.log('escuchando en el puerto 4000');
app.listen(4000);