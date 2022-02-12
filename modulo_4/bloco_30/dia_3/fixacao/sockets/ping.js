module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);
  
    // menda mensagem do back para o front
    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');
    
    // manda mensagem do front para o back
    socket.on('ping', () => {
      console.log(`${ socket.id } emitiu um ping!`);
      io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
  });
};