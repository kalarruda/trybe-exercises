function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ul = document.querySelector('#days');

for (let index = 0; index < dezDaysList.length; index +=1) {  
  let li = document.createElement('li');
  li.classList = 'day';
  li.innerHTML = dezDaysList[index];
  ul.appendChild(li);
  if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
    li.classList = 'day holiday';
  }
  else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
    li.classList = 'day friday';
  }
  else if (dezDaysList[index] === 25) {
    li.classList = 'day friday holiday';
  }
}

// Exercício 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function criaBotaoFeriados(nomeBotao){
  let buttonContainer = document.querySelector('.buttons-container');
  let botaoFeriados = document.createElement('button');
  botaoFeriados.id = 'btn-holiday';  
  botaoFeriados.innerHTML = nomeBotao;
  buttonContainer.appendChild(botaoFeriados);
}

criaBotaoFeriados('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

 
function mudaCorFundo () {
  let HolidayDays = document.querySelectorAll('.holiday');

  for (let index = 0; index < HolidayDays.length; index += 1) {
    if (HolidayDays[index].style.backgroundColor === 'rgb(238,238,238)') {
      HolidayDays[index].style.backgroundColor = 'red';
    } else {
      HolidayDays[index].style.backgroundColor = 'rgb(238,238,238)';
    }    
  }  
}

let btnHoliday = document.querySelector('#btn-holiday');
btnHoliday.addEventListener('click', mudaCorFundo);

// Exercício 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function friday(fraseSexta) {
  let btnSexta = document.createElement('button');
  let buttonContainer = document.querySelector('.buttons-container');
  btnSexta.innerHTML = fraseSexta;
  btnSexta.id = 'btn-friday';
  buttonContainer.appendChild(btnSexta);
}

friday('Sexta-feira');

// Exercício 5
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

// function mudaFundoSexta () {
//   let diasSexta = [ 4, 11, 18, 25 ];
//   let fridayDays = document.getElementsByClassName('friday');
//   for (let index = 0; index < fridayDays.length; index += 1) {
//     if (fridayDays[index].innerHTML !== 'SEXTA!'){
//       fridayDays[index].innerHTML = 'SEXTA!';
//     }
//     else {
//       fridayDays[index].innerHTML = diasSexta[index];
//     }
//   }
// }

// let btnSexta = document.getElementById('btn-friday');
// btnSexta.addEventListener('click', mudaFundoSexta);

function mudaFundoSexta (sexta) {  
  let fridayDays = document.getElementsByClassName('friday');
  let btnSexta = document.getElementById('btn-friday');
  
  btnSexta.addEventListener('click', function(){
    for (let index = 0; index < fridayDays.length; index +=1) {
      if (fridayDays[index].innerHTML !== 'SEXTA!'){
        fridayDays[index].innerHTML = 'SEXTA!';
      }
      else {
        fridayDays[index].innerHTML = sexta[index];
      }
    }
  })
}
let diasSexta = [ 4, 11, 18, 25 ];
mudaFundoSexta(diasSexta);

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomMouseOver () {
  let diasMes = document.getElementById('days');

  diasMes.addEventListener('mouseover', function(elemento) {
    elemento.target.style.fontSize = '30px';
    elemento.target.style.fonteweight = '600';
  })
}

function zoomMouseOut () {
  let diasMes = document.getElementById('days');
  diasMes.addEventListener('mouseout', function(elemento) {
    elemento.target.style.fontSize = '20px';
    elemento.target.style.fonteweight = '200';
  })
}

zoomMouseOver();
zoomMouseOut();

// Exercício 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function tarefaCalendario (tarefinha) {
  let spanTarefa = document.createElement('span');
  let minhasTarefas = document.getElementsByClassName('my-tasks')[0];
  
  spanTarefa.innerHTML = tarefinha;
  minhasTarefas.appendChild(spanTarefa);
}

tarefaCalendario('cozinhar');
