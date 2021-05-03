const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

// ---------------------------------------------------------------
// 1-Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function adicionaTech(elemento) {
  let tech = document.querySelector('.tech');
  tech.classList.remove('tech');
  elemento.target.classList.add('tech');
  input.value = '';
  console.log(elemento.target);
}

divUm.addEventListener('click',adicionaTech);
divDois.addEventListener('click',adicionaTech);
divTres.addEventListener('click',adicionaTech);

// 2-Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function changeText() {
  let input = document.getElementById('input').value;
  // let tech = document.getElementsByClassName('tech')[0];
  let tech = document.querySelector('.tech');
  // document.querySelector('.tech').innerText = input;
  tech.innerText = input; 
}

input.addEventListener('input',changeText);

// 3-Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// Que tal redirecionar para seu portifólio?

function duploClique() {
  // window.location.replace('http://www.kalarruda.com.br/');
  window.open('https://kalarruda.github.io/');
}

myWebpage.addEventListener('dblclick',duploClique);


// Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mudaCor() {
  myWebpage.style.color = "red";
}

function voltaCor() {
  myWebpage.style.color = "white";
}

myWebpage.addEventListener('mouseover',mudaCor);
myWebpage.addEventListener('mouseout',voltaCor)

