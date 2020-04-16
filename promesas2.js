/* Ejecucion secuencial de tareas asincronas */
/* Promesas en cadena */
/* Ejemplo de respuesta de microservicios */

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });

}

function datosDeUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1500);
    })
}


login().then(() => {
    console.log("usuario autenticado");
    return datosDeUsuario // datos del usuario es la respuesta cuando se obtenga el login 
}).then(() => {
    console.log("datos de usuario OK");
}).catch(() => {
    console.log("error");
});

datosDeUsuario()