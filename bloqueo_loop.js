/* Bloqueos en el event loop y cómo evitarlos */

const fs = require("fs");
var http = require("http");

/* creacion de una funcion ineficiente */

function leerArchivo() {
    /* leer los archivos hasta que llea todo el archivo 
    la lectura sincronica es mas lenta que la lectura asincronica */

    // fs.readFileSync("./folder5/archivo.txt", "utf8"); /* lectura sincronica */ 

    const streamlectura = fs.createReadStream("./folder5/archivo.txt", {
        encoding: "utf-8"
    });
}

/* creacion de un servidor */

http.
createServer(function (req, res) {
        for (let a = 0; a < 500; a++) {
            leerArchivo();
        }
        res.write("Hola Mundo");
        res.end();
    })
    .listen(8080);