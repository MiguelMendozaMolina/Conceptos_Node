const fs = require("fs");

/* transporte de datos en stream a través de pipes */

const streamLectura = fs.createReadStream("./folder2/base.txt");
const streamEscritura = fs.createWriteStream("./folder2/destino.txt");

/* Conectar 2 streams 
   Se le indica a donde se quiere escribir el contenido de base 

   al ejecutar el archivo se realiza el transpaso de informacion 
*/

streamLectura.pipe(streamEscritura);

streamLectura.on("end", () => {
   console.log("proceso finalizado");
})