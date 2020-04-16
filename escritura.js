const fs = require("fs");

var contenido = "1234567890";
var iteraciones = 15;

const streamEscritura = fs.createWriteStream("folder/mi_archivo3.txt");

for (var i = 0; i < iteraciones; i++) {
    contenido += contenido;

    streamEscritura.write(contenido, res => {
        console.log("...");
    })
}

/* Sistema de escritura tradicional */

fs.writeFile("folder/mi_archivo2.txt", contenido, {
    encoding: 'utf8'
}, () => {
    console.log("escritura directa finalizada");
});

/* Sistema realizado con stream */

// const streamEscritura = fs.createWriteStream("folder/mi_archivo3.txt");

// streamEscritura.write(contenido, res => {
//     console.log("stream finalizado");
// })

/* Refactorizacion de codigo stream 
   
   Se declara la constante en la parte superior y se adjunta el codigo 
   dentro del ciclo for 
   
*/