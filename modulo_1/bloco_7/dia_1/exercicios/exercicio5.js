// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const btnClick = document.getElementById('btnClick');
let numberClicks = document.getElementById('numberOfClicks');

let clickCount = 0;

btnClick.addEventListener('click', () => numberClicks.innerHTML = clickCount +=1);
