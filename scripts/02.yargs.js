
let args = require('yargs')
    .option('desde', {
        alias: 'd'
    })
    .option('hasta', {
        alias: 'h',
        default: 10
    })
    .option('salto', {
        alias: 's',
        default: 1
    })
    .demandOption('desde', 'La opción desde es obligatoria')
    .argv

let desde = args.desde
let hasta = args.hasta
let salto = args.salto

console.log('yargs:',args);
for (let i = desde; i <= hasta; i += salto) {
    console.log(i);
}