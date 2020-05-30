// Las que vienen por defecto
const fs = require('fs');
// las que tenemos que instalar
// const fs = require('express');
// Archivos que creamos en el proyecto
// const fs = require('./nombre');


let base = 6;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base } * ${i} = ${ i * base}\n`;
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado!`);
});

fs.readFile(`tablas/tabla-${base}.txt`, (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.toString());
});

fs.watchFile('tablas/tabla-${base}.txt', (curr, prev) => {
    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
});