const fs = require("fs");
const {
    Duplex
} = require("stream");

const streamLectura = fs.createReadStream("folder2/base.txt");
const streamEscritura = fs.createWriteStream("folder2/destino.txt");

const reporte = new Duplex({
    write(data, encode, callback) {
        console.log(data);
        callback();
    },
    read(size) {}
})

streamLectura.pipe(reporte).pipe(streamEscritura);