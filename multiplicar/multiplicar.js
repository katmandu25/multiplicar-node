const fs = require('fs');
const colors = require('colors');

let data = '';

//module.exports.crearTabla = (base) => {   Es otra manera de definir el el modulo
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El elemento ${base} no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El elemento ${limite} no es un número.`);
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base * i} \n`
        }

        console.log(tabla);
        resolve(tabla);

    })
}

let crearTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El elemento ${base} no es un número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
                //console.log('The file has been saved!');
        });
    })
};

module.exports = {
    crearTabla,
    listarTabla
}