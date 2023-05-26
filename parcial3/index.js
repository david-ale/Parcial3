const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {dbConnection} = require('./database/database.config');
const {configureSocket} = require('./sockets/socket.config')
const socketIO = require('socket.io');
const io = socketIO(server);
const cors = require('cors')

dbConnection();
configureSocket(io);
app.use(cors())

const port = 4000
server.listen(port, () => {
    console.log(`Corriendo en el puerto: ${port}`);
  });   