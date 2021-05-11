const states = document.getElementById('state');

const statesList = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < statesList.length; index += 1) {
  const options = document.createElement('option');
  options.innerHTML = statesList[index];
  states.appendChild(options);
}

