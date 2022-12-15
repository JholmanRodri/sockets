const txtNombre= document.querySelector("#txtNombre")
const btnSaludar= document.querySelector("#btnSaludar")
const txtMensaje= document.querySelector("#txtMensaje")
const btnMensaje= document.querySelector("#btnMensaje")

var socket = io();
// on escuchar 

socket.on("connect", function () {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
  console.log("Conexion perdida con el servidor");
});

socket.on("buenas", function (msg) {
  console.log(`Este es el mensaje del servidor ${msg}`);
});

socket.on("notificar", function (msg) {
  console.log(msg);
});

//emit hablo 

btnSaludar.addEventListener("click",()=>{
    socket.emit("holaTodos", `Saludo de ${txtNombre.value}`, function (rtaServidor) {
        console.log(rtaServidor);
      });
})

btnMensaje.addEventListener("click",()=>{
    socket.emit(
        "enviarMensaje",
        {
          nombre: "Mariana",mensaje: txtMensaje.value,
        },
        function (resp) {
          console.log(`Esto es una respuesta del servidor ${resp.msg}`);
        }
      );
})

