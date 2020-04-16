/* Ejecucion paralela de tareas en Node 
   Ejemplo llamar diferentes servicios o diferentes valores 
   para poder mostrarlos todos de una sola vez 

   Ejemplo de obtener todos los mensajes privados de un usuario 
   al estar consumiendo una api 

*/

function mensajesPrivados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mensajes");
        }, 1500);
    })
}

function galeriaDeFotos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fotos");
        }, 1500);
    })
}

function ultimasTransacciones() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("transacciones");
        }, 1500);
    })
}

/* Ejecucion lineal con el comando Promise 
   Se espera que todas las promesas se ejecuten a la espera de un resultado 
   Se agrega al then para esperar una respuesta el elemento valores que retorna 
   los valores obtenidos en cada funcion pero dentro de un array */

Promise.all([mensajesPrivados(), galeriaDeFotos(), ultimasTransacciones()]).then((valores) => {
    console.log(valores);
})