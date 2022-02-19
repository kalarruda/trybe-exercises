const io = window.io();

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true});

  socket.emit('joinRoom', { username, room });

  const form = document.querySelector('form');
  const inputMessage = document.querySelector('#messageInput');
  
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const message = inputMessage.value;
    socket.emit('roomClientMessage', { room, message });
    inputMessage.value = '';
    return false;
  });

socket.on('serverMessage', (message) => createMessage(message));