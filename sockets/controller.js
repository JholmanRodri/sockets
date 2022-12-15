
const socketController =(socket)=>{
    console.log(socket.id);
    socket.broadcast.emit('notificar',`Nuevo usario ${socket.id}`)
    
    socket.on('enviarMensaje',function(usuario,callback){
        console.log(usuario.nombre);
        console.log(usuario.mensaje);
        callback({
            msg:"Usuario insertado en la bd",
            usuario
        })
    })

    socket.on('holaTodos',function(msg,callback){
        console.log(msg);
        socket.broadcast.emit('notificar',msg)
        callback('Mensaje enviado')
    })
}

export default socketController