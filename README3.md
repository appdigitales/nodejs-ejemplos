    mongodb:
    base de datos no relacional que se integra con javascript gracias a mongoose.

    robo 3t

    get 
    put actualizar datos
    post crear nuevos registros


    app.put('usuario/:id, function(req, res){
        let id= req.params.id;
        res.json({
            id
        })

    })


    body-parser:


    app.use --> middlewares



mandar estado de error:
res.status(400).json({
    ok: false,
    message: "fallo en tal cosa"
})

archivo configuracion global
process.env.PORT = process.env.PORT || 3000;


configuracion environment postman

bcrypt

npm install mongoose-unique-validator

mlab



Introducción a los tokens
JWT
Login personalizado
Protección de rutas vía token
Leer payload del token sin la firma
Tips importantes para POSTMan
Despliegues en Heroku para pruebas en producción
Uso de Middleware


token: autenticación de dos pasos. 

el json web token (JWT) dispone de 3 partes:
header:info sobre el algoritmo usado junto con el tipo de token,
payload contiene la información 
firma: es para verificar si el token es correcto.

Los token son encriptados de doble vía, es decir, que se puede obtener fácilmente, y hay que evitar pasar datos sensibles, como la contraseña.


En la web https://jwt.io/ te permite decodificar, verificar y generar un token

Con este script te permite decodificar cualquier token, usando cualquier algorigmo descrito en la página.

```javascript
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};
```

generar un jwt
npm install jsonwebtoken --save

Formas de enviar token:
desde el get como un parámetro : &token=asdfkdjl

desde la Headers de la solicitud con key Authorization, token. 

El token se coloca en cada petición desde un middleware

```javascript
let verificaToken = (req, res, next) => {
    let token = req.get('Authorization');

    ...
    next();
}
```

Si no pasa por el next no continua con el resto de la petición y termina con el middleware.

Si hay varios middlewares, se colocan todos dentro de un array.


snippets de postman
