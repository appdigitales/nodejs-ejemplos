#!/usr/bin/env node
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