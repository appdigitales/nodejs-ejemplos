# NodeJS - primeros pasos

https://nodejs.org/es/docs/
accedemos al api que estemos usando.
Todas esas paquetes se pueden usar, no hay que instalarlas. 

## Package.json

Para cualquier proyecto node, se requiere siempre de la creación del package.json. Se puede construir manualmente o por comandos.

```bash
$ npm init
```

Package.json administra el proyecto, guardando toda dependencia, tan solo con hacer un `npm install` se descargaría todas las librerías.

## Nodemon

Herramienta que monitoriza cualquier cambio de tu código y recarga el archivo llamado.

https://nodemon.io/

Instalación:

```bash
$ npm install -g nodemon
$ nodemon -v
```

ej: nodemon saluda.js 
Al modificar 'saluda' se volvería a reiniciar el código de ese archivo.

 o en el caso de que lo queramos importar en el proyecto

 ```bash
$ npm install nodemon --save-dev
 ```

## Importar y exportar archivo

Para no trabajar en un archivo toda la app. En este caso se crea una función 'mostrarAnimal', y luego se exporta mediante module.exports.

**Exportar**

```javascript
mostrarAnimal = (color) => {
    switch (color) {
        case 'rojo':
            console.log('🦀 🦞 🦐 🦜 🐙');
            break;
        case 'verde':
            console.log('🐸 🐊 🐢 🦎 🐍 🐲 🐉 🦕 🦖');
            break;
        case 'azul':
            console.log('🐳🐋🐬🐟🦈');
            break;
        default:
            console.log('🦓 🦌 🐮 🐷 🐗 🐘 🦏 🦛 🐹 🐰 🐿')
            break;
    }
}

module.exports = {
    mostrarAnimal
}
```

**Importar**

Tan fácil como poner 'require' con la ruta del archivo.

```javascript

// importa archivo
const animales= require ('./01/animales');

// importa colores
var colors = require('colors');

// recupera primer argumento: node 01.saludaColores.js verde
// primer argumento es node (0)
// segundo argumento es el archivo llamado (1)
const argumento = process.argv[2];

console.log(`Argumento: ${argumento}`.bgYellow.red);
animales.mostrarAnimal(argumento);
```

## Shebang - (#!)

```javascript
#!/usr/bin/env node
```

Mediante esta linea, colocado al principio de un archivo node que queramos ejecutar, nos ahorramos tener que indicar node.
Es decir, en vez de `node miArchivo.js`, ejecutariamos `miArchivo.js`.
Es solo para entornos unix, y antes de su ejecución se debe dar los derechos de ejecucion: `chmod +x miArchivo.js`.



## colores de consola

La consola no tiene por qué ser tan aburrida, podemos darle un poco de color a los errores, mensajes, menus de scripts, ayuda...

- Puedes cambiar colores de forma nativa

```javascript
console.log('\x1b[36m%s\x1b[0m', 'I am cyan');  //cyan
console.log('\x1b[33m%s\x1b[0m', stringToMakeYellow);  //yellow


// Colores:

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
```

- O con libería:
Realmente hay muchas liberías que te puedes descargar. Esta es una de ellas.

```bash
npm install colors --save
```

```javascript
// En fondo amarillo, letras rojas
console.log(`argumento: ${argumento}`.bgYellow.red); 
```

## Paso de argumentos

- Se puede usar `process.argv` de forma nativa:

```javascript
// obtención del primer parámetro
const argumento = process.argv[2];

// obtención de todos los parámetros
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

```

- Yargs, mediante biblioteca
Ayuda a crear herramientas de línea de comandos interactivas al analizar los argumentos y generar una interfaz de usuario elegante.

```bash
$ npm install yargs --save
```

```javascript

let args = require('yargs')
    .option('desde', {
        alias: 'd',
        default: 1
    })
    .option('hasta', {
        alias: 'h',
        default: 10
    })
    .option('salto', {
        alias: 's',
        default: 1
    })
    .argv

let desde = args.desde
let hasta = args.hasta
let salto = args.salto

console.log('yargs:',args);
for (let i = desde; i <= hasta; i += salto) {
    console.log(i);
}
```


Otro ejemplo de yargs, lee un archivo e indica las lineas que tiene

```javascript
var argv = require('yargs')
    .usage('Uso: $0 <command> [options]')
    .command('count', 'Cuenta las lineas de un archivo')
    .example('$0 count -f foo.js', 'cuenta las lineas del archivo dado')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Load a file')
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .epilog('Cogido de: https://github.com/yargs/yargs/blob/master/docs/examples.md')
    .argv;

var fs = require('fs');
var s = fs.createReadStream(argv.file);

var lines = 0;
s.on('data', function (buf) {
    lines += buf.toString().match(/\n/g).length;
});

s.on('end', function () {
    console.log(lines);
});
```


## Peticiones Http

Hay dos bibliotecas muy populares:
- axios--> usa promesas
https://www.npmjs.com/package/axios

```bash
$ npm install axios --save
```

```javascript
const axios = require('axios');

// 1ª forma, por promesa
axios.get(`url`)
    .then(res=>{

    })
    .catch(e=> console.log('error',e));


// 2ª forma, por async await

const miFunction = async(url)=>{
const resp= await axios.get(`url`)

// a partir de esta linea ya tengo resp.
}

```

- request --> usa callback
https://www.npmjs.com/package/request

