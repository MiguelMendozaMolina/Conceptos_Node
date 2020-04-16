/* Stream de lectura */

const fs = require("fs");
const streamLectura = fs.createReadStream("folder/mi_archivo.txt", {
    encoding: 'utf8'
});

/* Canal de lectura
   Tambien se pueden encadenar diferentes eventos 
   en el momento en que se reciban datos debe mostrar 4 lineas 
*/

streamLectura.on("open", () => {
    console.log("abriendo archivo");
}).on("data", () => {
    console.log(" ---- ");
}).on('close', () => {
    console.log("archivo cerrado")
}).on('error', () => {
    console.log("error en el archivo")
})

/* Al ejecutar el archivo se realiza una lectura de forma progresiva 
   las ---- al momento de ejecutar el programa dan a conocer como se 
   esta ejecutando el archivo y como se realiza su lectura progresiva */

/* En el caso de que la ruta donde se encuentre el archivo presente errores, se debera
   se mostrara por consola = error en el archivo */