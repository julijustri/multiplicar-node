// Las que vienen por defecto
// const fs = require('fs');
// las que tenemos que instalar
// const fs = require('express');
// Archivos que creamos en el proyecto
// const fs = require('./nombre');
// console.log(module);

// Sin destructuracion
// const logica = require('./tablas/logica.js');
// console.log(logica);

// Con destructuracion
const { crearArchivo } = require('./tablas/logica.js');
console.log(crearArchivo);

// let base = "7";

// console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
// let base = parametro.split('=');
let base = parametro.split('=')[1];
console.log(parametro); // --base=5
console.log(base); // [ '--base', '5' ]
// EJECUTAR EN CONSOLA: nodemon app2 --base=5 

// Sin destructuracion
// logica.crearArchivo(base)
//     .then((archivo) => {
//         console.log(`Archivo creado: ${archivo}`);
//     });

// Con destructuracion
crearArchivo(base)
    .then((archivo) => {
        console.log(`Archivo creado: ${archivo}`);
    }).catch((err) => {
        console.log(err);
    });