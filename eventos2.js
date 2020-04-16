/* crear eventos personalizados */

const fs = require("fs");
const streamEscritura = fs.createWriteStream("./folder6/mi_archivo.txt");
const EventEmitter = require("events"); /* referencia que me permite tener acceso a los eventos */

class Emisor extends EventEmitter {}
const miEmisor = new Emisor(); /* creacion de la instancia de la clase */

function escribirEnArchivo() {
    var iteraciones = 5;

    for (var i = 0; i < iteraciones; i++) {
        streamEscritura.write(`Iteracion #${i}\n`);
    }
    streamEscritura.write(`================ FIN ================ `);
    streamEscritura.end();
}

function notificarPorCorreo() {
    console.log("preparando correo");

    setTimeout(() => {
        miEmisor.emit("correoOK"); /* se genera el evento personalizado */
    }, 1000);
}

function leerDocumento() {
    fs.readFile("./folder6/mi_archivo.txt", (error, documento) => {
        console.log(documento.toString());
    });
}

/* escuchar el evento cuando se cierra el archivo y termina de escribir */

streamEscritura.on("close", () => {
    notificarPorCorreo(); /* llamada del evento notificar por correo */
});

/* evento que esta transmitiendo 
   tambien se pueden transmitir multiples evento */

miEmisor.on("correoOK", () => {
    leerDocumento(); /* llamado de la funcion cuando se termina de escribir en el documento */
});

escribirEnArchivo();