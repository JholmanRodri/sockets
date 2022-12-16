// const txtNombre= document.querySelector("#txtNombre")
// const btnSaludar= document.querySelector("#btnSaludar")
// const txtMensaje= document.querySelector("#txtMensaje")
// const btnMensaje= document.querySelector("#btnMensaje")

const btnMensaje2 = document.querySelector("#btnMensaje2")
const txtNombre2 = document.querySelector("#txtNombre2")
const txtMensaje2 = document.querySelector("#txtMensaje2")

const fecha = new Date();
const fecha2 = fecha.toLocaleString()

var socket = io();
let Chat = [];
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

// socket.on("notificar", function (msg) {
//   console.log(msg);
// });

//emit hablo 

// btnSaludar.addEventListener("click",()=>{
//     socket.emit("holaTodos", `Saludo de ${txtNombre.value}`, function (rtaServidor) {
//         console.log(rtaServidor);
//       });
// })

//Mensajes

btnMensaje2.addEventListener("click",()=>{
    let a = txtNombre2.value.toUpperCase()  
    socket.emit("mensajeTodos", `${fecha2}  ${a} : ${txtMensaje2.value}`, function (rtaServidor) {
        let mensaje1 = `<li>${fecha2} ${a} : ${txtMensaje2.value}</li>`
        Chat.push(mensaje1)
      for (let i=0; i<Chat.length; i++){
        document.getElementById("mensaje").innerHTML = Chat
      }
        // document.getElementById("mensaje").innerHTML = rtaServidor
        // console.log(b);
        // console.log(rtaServidor);
      });
})

socket.on("notificar", function(msg){
  let mensaje1 = `<li>${msg}</li>`
  Chat.push(mensaje1)
  for (let i=0; i<Chat.length; i++){
  document.getElementById("mensaje").innerHTML = Chat
  }
  console.log(mensaje1);
})

// btnMensaje.addEventListener("click",()=>{
//     socket.emit(
//         "enviarMensaje",
//         {
//           nombre: "Mariana",mensaje: txtMensaje.value,
//         },
//         function (resp) {
//           console.log(`Esto es una respuesta del servidor ${resp.msg}`);
//         }
//       );
// })

