// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const emailCreator = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return { name, email: `${email}@trybe.com` }; // mostra um objeto com name e email como chaves
}


const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Pedro Guerra'),
    id2: funcao('Luiza Drumond'),
    id3: funcao('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(emailCreator));
