
let header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

let fundoEsquerda = document.getElementsByClassName('emergency-tasks')[0];
fundoEsquerda.style.backgroundColor = 'rgb(255, 159, 132)';

let fundoDireita = document.querySelector ('.no-emergency-tasks');
fundoDireita.style.backgroundColor = 'rgb(249, 219, 94)';

let esquerdaCabecalho = document.querySelectorAll('.emergency-tasks h3');
for(let index=0 ; index<esquerdaCabecalho.length ; index +=1){
  esquerdaCabecalho[index].style.backgroundColor = 'purple';
}

let direitaCabecalho = document.querySelectorAll('.no-emergency-tasks h3');
for (let index =0 ; index<direitaCabecalho.length ; index+=1){
  direitaCabecalho[index].style.backgroundColor = "black";
}

document.querySelector('#footer-container').style.backgroundColor = "green";
