const soquete = window.io();

// const soquete = io();
  const button = document.querySelector('#palavraobtn');
  button.addEventListener('click', (e) => {
    soquete.emit('palavrao');
    return false;
  });

  const mensagemOla = (message) => {
    const ul = document.querySelector('#mensagem-ul');
    const li = document.createElement('li');
    li.innerText = message;
    ul.appendChild(li);
  };

  soquete.on('ola', (algo) => mensagemOla(algo));
  soquete.on('frase', (algo) => mensagemOla(algo));
