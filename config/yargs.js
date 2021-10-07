

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la multiplicación'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el limite de veces que se imprimira la multiplicación'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'lista la tabla'
    })
    .check((argv, options) => {
        if(isNaN( argv.b ) ){
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

    module.exports = argv;