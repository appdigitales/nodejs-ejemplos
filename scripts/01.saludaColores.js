
// importa archivo
const animales= require ('./01/animales');

// importa colores
var colors = require('colors');

// recupera primer argumento: node 01.saludaColores.js verde
// primer argumento es node (0)
// segundo argumento es el archivo llamado (1)
const argumento = process.argv[2];

console.log(`argumento: ${argumento}`.bgYellow.red);
animales.mostrarAnimal(argumento);