const fs = require("fs");
const {
  Transform
} = require("stream");

/* Transformacion de la informacion */

const streamLectura = fs.createReadStream("./folder2/base.txt");
const streamEscritura = fs.createWriteStream("./folder2/destino.txt");

/* definicion de lectura = encoding */

streamLectura.setEncoding("utf8");

const filtro = new Transform({
  writableObject: true,
  transform(data, encoding, callback) {
    this.push(data.toString().toUpperCase())

    callback();
  },
  final(callback) {
    callback();
  }
})

streamLectura.pipe(filtro).pipe(streamEscritura);

/* Se implementara un pipe de tipo transform para poder
   modificar la informacion en el archivo destino
   
   Al ejecutar el archivo las palabras en el archivo de destino se almacenan 
   en letras mayusculas 
   
   */