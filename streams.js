// Utilización de streams 

const fs = require('fs'); // Necesario para poder trabajar con archivos 
console.time("tiempo de respuesta"); // Este console sirve para saber el tiempo que se demora en leer el archivo 

/* Ciclo for para poder recorrer // leer el archivo 5 veces 
 bajo esta modalidad el tiempo de respuesta es mucho mas lento */


// for(let i=0; i<= 10; i++){

//     permite leer el archivo.txt 
//     fs.readFileSync('folder/archivo.txt', 'utf8');
// }


/* Al utilizar strems el tiempo de respuesta es mucho mas rapido 
   lectura de un archivo con streams */

for (let i = 0; i <= 10; i++) {

   // permite leer el archivo.txt 
   const streamEscritura = fs.createReadStream("folder/archivo.txt", {
      encoding: "utf-8"
   });
}

console.timeEnd("tiempo de respuesta") /* tiempo finalizado la ejecuccion */

/* La lectura con el metodo de streams nos permite leer partes de un archivo siempre que estas 
   se encuentren disponible , por lo tanto solo se leen solo partes de el y no el archivo completo 

   Con el metodo tradicional se espera que el archivo se termine de leer para ejecutar el 
   siguiente proceso es debido a ello que esto se toma mas tiempo para poder responder 

   Los streams permiten trabajar en diferentes hilos de forma asincronica , lo cual permite 
   no bloquear el tiempo de ejecucion de las aplicaciones */