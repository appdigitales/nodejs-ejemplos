const http = require('http');

http.createServer((req, res) => {
        // 1. Podemos crear página web con un body que pone hola mundo
        //  res.write('Hola Mundo');

        // 2. Podemos devolver un servicio
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        const salida = {
            status: 200,
            data: {
                name: 'Jose',
                ciudad: 'Madrid',
                sexo: 'v'
            }
        }
        res.write(JSON.stringify(salida));

        // siempre hay que teminar despues de usar write. 
        // Si no, se queda bloqueado.
        res.end();
    })
    .listen(4444)
console.log('Escuchando el puerto 4444');