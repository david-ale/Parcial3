const Mensaje = require('../models/mensaje');

const configureSocket = (io) => {
    io.on('connection', (socket) => {
      console.log('Cliente conectado:', socket.id);
  
      socket.on('enviarMensaje', (data) => {
        const mensaje = new Mensaje({
          content: data.mensaje,
          id: data.id,
          name: data.name
        });
  
        mensaje.save()
          .then(() => {
            socket.emit('mensajeEnviado', 'Tu mensaje fue enviado');
          })
          .catch((error) => {
            console.error('Error al guardar el mensaje:', error);
          });
      }); 
      socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
      });
    });
  };
  
  module.exports = {configureSocket};
