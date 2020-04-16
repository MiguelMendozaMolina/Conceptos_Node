/* Escuchar eventos del sistema 

Resultado esperado 
inicia http
... recibiendo datos
... recibiendo datos
... recibiendo datos
... recibiendo datos
... recibiendo datos
... recibiendo datos
termina http*/

const https = require("https");

const req = https.get(
  "https://en.wikipedia.org/w/api.php?action=help&format=json",
  (res) => {
    res.on("data", (data) => {
      console.log("... recibiendo datos");
    });
    res.on("end", (data) => {
      console.log("termina http");
    });
  }
);

/* evento socket es un elemento que detecta el momento de la conexion 
Esto permite conocer cuando se inicia la conexion */
req.on("socket", (data) => {
  console.log("inicia http");
});

/* evento de errores de la conexion 
envia un mensaje de error en caso de que la conexion no se pueda realizar */

req.on("error", (data) => {
  console.log("error");
});