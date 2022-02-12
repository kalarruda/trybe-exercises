module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário de ID: ${ socket.id } se conectou!`);
    
    socket.emit('ola', 'tudo bem com voce meu filho??');
    
    socket.on('palavrao', () => {
      console.log(`O ID: ${ socket.id }, falou palavrão!`);
      io.emit('frase', 'esta frase é pra ser um palavrão..');
    });
  });
};
