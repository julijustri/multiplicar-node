const argv = require('./config/yargs.js').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./tablas/logica.js');

let commando = argv._[0];

switch (commando) {
    case 'listar':
        // node app3 listar -l 30 -b 5
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        console.log(argv.base);
        console.log(argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado: `, colors.rainbow(`${archivo}`));
                console.log(`Archivo creado: `, `${archivo}`.green);
            }).catch((err) => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no reconocido');
}