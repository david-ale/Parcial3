require(['https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.4.1/socket.io.js'], function(io) {   
const socket = io();


socket.on('connect', () => {
  console.log('Conectado al servidor');
  socket.emit('enviarMensaje', {
    mensaje: '¡Hola, servidor!',
    id: '123',
    name: 'Usuario1'
  });
});

socket.on('mensajeEnviado', (mensaje) => {
  console.log('Mensaje enviado:', mensaje);
  const mensajesDiv = document.getElementById('mensajes');
  mensajesDiv.innerHTML = message;
});

socket.on('nuevoMensaje', (mensaje) => {
  console.log('Nuevo mensaje recibido:', mensaje);
  const mensajesDiv = document.getElementById('mensajes');
  mensajesDiv.innerHTML = message.content;
});

socket.on('disconnect', () => {
  console.log('Desconectado del servidor');
});
})