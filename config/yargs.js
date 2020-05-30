const opts = {
    base: {
        demand: true, // requerido
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    // 1= Comamdo,2=Ayuda explicacion, 
    // 3= es un objeto, este objeto va a recibir la configuracion de parametros o de flats que ese comando puede recibir
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea tablas de multiplicar', opts)
    // .command('crear', 'Crea tablas de multiplicar', {
    //     base: {
    //         demand: true, // requerido
    //         alias: 'b'
    //     },
    //     limite: {
    //         alias: 'l',
    //         default: 10
    //     }
    // })
    .help()
    .argv;

module.exports = {
    argv
};