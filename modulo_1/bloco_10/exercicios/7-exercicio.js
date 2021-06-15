// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

const techList = (technologies, name) => {
  if(technologies.length === 0) {
    return 'Vazio!';
  }
  const result = technologies
  .sort()
  .map((techs) => ({   
      tech: techs,
      name: name,
  }))
 return result;  
}

// console.log(techList([], 'jose'))
console.log(techList(['merda', 'bosta', 'azul'], 'jose'))

module.exports = techList;