const selectStates = document.getElementById('state');
const registerButton = document.getElementById('btnEnviar');
const eraseButton = document.getElementById('btnErase');
const main = document.getElementById('main');

// const formsId = ['name', 'email', 'cpf', 'end', 'city', 'state', 'casa', 'apt', 'resume', 'cargo', 'descricao', 'date'];

const formsId = ['nome', 'email', 'cpf', 'endereco', 'city', 'state', 'type', 'resume', 'cargo', 'descricao', 'date'];

const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

function createStates (states) {
  for (let index = 0; index < states.length; index += 1) {
    const optionState = document.createElement('option');
    optionState.innerText = states[index];
    optionState.value = states[index]; // para usar no submit do formulário
    selectStates.appendChild(optionState);
  }  
}

function dayIsValid(day) {
  if (day < 1 || day > 31) {
    return false;
  }
  return true;
}

function monthIsValid(month) {
  if (month < 1 || month > 12) {
    return false;
  }
  return true;
}

function yearIsValid(year) {
  if (year < 0) {
    return false;
  }
  return true;
}

function dateInput() {
  let date = document.getElementById('date').value;// pega o valor da data
  const formatDate = /^\d\d\/\d\d\/\d\d$/; // formato que a data tem que ser 
  if (date.length === 0) { // se tamanho da data for menor que 10 (porque cada número e barra conta no length)
    alert ('Data não preenchida.');
    return false;
  }
  if (!formatDate.test(date)) { // usa função test para comparar o conteúdo
    alert ('Formato de data inválido.');
    return false;
  }
  date = date.split('/');
  const day = date[0];
  const month = date[1];
  const year = date[2];
  const responseDayIsValid = dayIsValid(day); // pega a função de cima
  const responseMonthIsValid = monthIsValid(month); // pega a função de cima
  const responseYearIsValid = yearIsValid(year); // pega a função de cima
  if (responseDayIsValid === false) {
    alert ('Dia inválido.');
  }
  if (responseMonthIsValid === false) {
    alert ('Mês inválido.');
  }
  if (responseYearIsValid === false) {
    alert ('Ano inválido.');
  }
  return (responseDayIsValid && responseMonthIsValid && responseYearIsValid);
} // vai retornar o return com false se tiver algum false ou true se TODOS forem true (pela regra de &&)

let originalTypeIdList = [];

function typeListId() {
  const typeList = document.querySelectorAll('.typeClass');
  for (let index = 0; index < typeList.length; index += 1) {
    originalTypeIdList.push(typeList[index].id); // coloca os ids originais dos itens que possuem classe typeClass na array
  }
}

function typeChange() {
  const typeList = document.querySelectorAll('.typeClass');
  for (let index = 0; index < typeList.length; index += 1) {
    if (typeList[index].checked) { // se o radio button estiver "checkado" (selecionado)
      typeList[index].id = 'type'; // o id muda para "type"
    }
    if (!typeList[index].checked) {
      typeList[index].id = originalTypeIdList[index];
    } // se não estiver selecionado recebe o id original
  }
}

function submitButton() {
  registerButton.addEventListener('click', (event) => {
    typeChange();
    const dateInputIsValid = dateInput();
    if (!dateInputIsValid) {
      event.preventDefault(); // previne que o submit faça a função de "submeter" ou "enviar"
    }
  });
}

function getForm(formsId) {
  let answeredForm = document.getElementById('complete-form');
  let elementDiv = document.createElement('div'); // adiciona div com as informações preenchidas do formulário para mostrar na tela no final se o submite for true
  elementDiv.id = 'resultDiv'; // acrescenta esse id nessa div
  main.appendChild(elementDiv);
  answeredForm.addEventListener('submit', (event) => { // verificar depois se coloca o registerButton
    event.preventDefault(); // verificar depois 
    for (let index =0; index < formsId.length; index += 1) {
      let elementP = document.createElement('p'); // criar o parágrafo dentro da div para colocar as informações
      elementDiv.appendChild(elementP);
      let elementId = document.getElementById(`${formsId[index]}`); // pega o valor de cada elemento do array formsId
      elementP.innerText = `${elementId.name}: ${elementId.value}`; // pega os valores dos "name" e o "value" dentro do parágrafo que vai dentro da div
    }
    let quebraLinha = document.createElement('br');
    elementDiv.appendChild(quebraLinha);
  });
}

function clearButton() {
  eraseButton.addEventListener('click', () => {
    let elementDiv = document.getElementById('resultDiv');
    main.removeChild(elementDiv);
  });
}

createStates(states);
typeListId();
submitButton();
getForm(formsId);
clearButton();

