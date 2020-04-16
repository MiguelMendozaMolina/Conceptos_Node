/* Las promesas son parte fundamental del desarollo con javascript , lo cual 
nos permite crear programacion "asyncronica" , inicializar procesos sin detener el inicio 
de los programas */

/* Inicializar procesos sin detener la aplicacion */
/* interaccion con los archivos del sistemas tiene un costo alto */

/* Filesystem entrega la opcion de trabajar con callbacks o con promesas */

/* then se ejecuta cuando la copia se realiza correctamente 
   catch cuando no se puede realizar la accion 
   finally esta ejecuccion se realizara independiente del resultado */


const promesasNode = require("fs").promises;


promesasNode.copyFile("folder3/original.txt", "folder3/copia.txt")
   .then(() => console.log("copia terminada"))
   .catch(() => console.log("no se puede copiar el archivo"))
   .finally(() => console.log("..."));