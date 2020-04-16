/* Ejecuccion secuencial de async/await */

/* async/await es un instancia alternativa para poder trabajar con promesas */
/* Esto sirve para poder esperar un tiempo hasta que responda la promesa por ejemplo al momento de consumir una api */

/* resolve = solucion definitiva de respuesta en la promesa 
   reject = respuesta de error en la promesa */

/* El setTimeOut es una simulacion para una respuesta de una api lenta,
   para ello el resultado de la promesa se demorara 2 segundos en mostrarse  */

function numeroAletorio() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 2000);

    })

}

/* en este caso se puede utilizar la sisntasis de promesa que es then - catch ,
pero se utilizara una sintaxis alternativa , para ello es necesario poder llamar una nueva funcion */

async function resultado() {

    console.log("resultado invocado")
    const aleatorio = await numeroAletorio();

    console.log(`Resultado: ${aleatorio}`); // obtener el resultado de la promesa por consola 
}

/*  console.log(`Resultado: ${aleatorio}`); devuelve [object Promise] es decir retorna una promesa
    pero no retorna el valor, esto es por que se obtiene un valor que todavia no se a resuelto en el tiempo, 
    para ello es necesaria la implementacion de async/await 
    
    Se declara la funcion del tipo async , y se espera por la respuesta del retorno de la promesa 
    por medio de await 

*/


resultado(); // Para que se invoque luego de la aplicacion 