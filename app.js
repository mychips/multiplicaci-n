
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();


/* console.log(process.argv);
const [ , ,arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('='); */
/* console.log( argv ); */



/* const base = 3;
 */
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));

/* fs.writeFile( 'tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('tabla-5.txt creado')
}) */