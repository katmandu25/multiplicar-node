//requireds
//const fs = require('fs');

//const fs = require ('express');   Son librerias que no vienen en nodeJs. Se instala aparte. NO es nativo
//const fs = require ('./fs'); Son librerias creadas por nosotros y estan en nuestro proyecto.

// const argv = require('yargs').argv
// Utilizamos ahora el parametro command de yargs para gestionar los parámetros de entrada

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un fichero con la tabla de multiplicar pasada por parametro', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })




// .help()
//     .argv;

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => {

                console.log('================'.green);
                console.log(`tabla del ${argv.base}`.green);
                console.log('================'.green);
                console.log(`${archivo}`)
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

console.log(argv);


//let base = '5';
// Ahora vamos a implementar el paso por argumento
// Seria pasando node app --base=5

// let argv2 = process.argv;
// let parametro = argv[2];
//let base = parametro.split('=')[1];


// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i} \n`;
// }

// // const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile(`tablas/tabla-${base}.ext`, data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// crearTabla(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));

//console.log(module);   variable que nos indica parametros de la ejecución de nuestro proceso.
//console.log(process);  variable que nos indica parametros de la ejecución de nuestra maquina.
//console.log(process.argv); Nos muestra los parametros de entrada

//console.log(base);
//console.log(argv.base);
//console.log(argv.limite);
//console.log(argv2);
//console.log(multiplicar);app crear