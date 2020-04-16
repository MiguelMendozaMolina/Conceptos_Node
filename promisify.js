/* convertir callbacks en promesas con promisify */

const fs = require("fs");
const util = require("util"); /*se utiliza esta instancia para poder convertir un callback en promesa */

/* formato de un callback original */

//fs.writeFile("folder4/archivo.txt", "12345678", () => {
//    console.log("ok");
//})

const writeFilePromesa = util.promisify(fs.writeFile); /* Indicamos que es lo que queremos convertir a una promesa */

writeFilePromesa("folder4/archivo.txt", "12345678")
    .then(() => {
        console.log("ok");
    })
    .catch(() => {
        console.log("error en la promesa");
    })