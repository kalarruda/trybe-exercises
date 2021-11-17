const connection = require('./connectionMysql');

const getNewAuthor = ({ id, PrimeiroNome, NomeDoMeio, Sobrenome }) => {
  const NomeCompleto = [PrimeiroNome, NomeDoMeio, Sobrenome].filter((algo) => algo).join(' ');
  // O FILTER AQUI IGNORA O NULL, LOGO SE O NOMEDOMEIO TIVER NULL NÃO APARECE
  return {
    id,
    PrimeiroNome,
    NomeDoMeio,
    Sobrenome,
    NomeCompleto,
  }
}
const serialize = (authorData) => {
  return {
    id: authorData.id,
    PrimeiroNome: authorData.first_name,
    NomeDoMeio: authorData.middle_name,
    Sobrenome: authorData.last_name,
  }
}

const getAll = async () => {
  const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
//  NÃO ENTENDI PORQUE USANDO COLCHETES DESESTRUTURA SÓ O PRIMEIRO
  return result.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const [authorId] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?', [id]);
  
  if(authorId.length === 0) {
    return null; // SE O RESULTADO DA PESQUISA NÃO RETORNAR E VIER UM LENGHT ZERO ENTÃO LÓGICAMENTE NÃO EXISTE ESSE ID
  }
  const { PrimeiroNome, NomeDoMeio, Sobrenome, NomeCompleto } = authorId.map(serialize)[0];
  return getNewAuthor({
    id,
    PrimeiroNome,
    NomeDoMeio,
    Sobrenome,
    NomeCompleto,
  })
}

//PARA VALIDAR SE ELES ESTÃO PREENCHIDOS
const isValid = (PrimeiroNome, NomeDoMeio, Sobrenome) => {
  if(!PrimeiroNome || typeof PrimeiroNome !=='string') return false;
  if(!Sobrenome || typeof Sobrenome !== 'string') return false;
  if(typeof NomeDoMeio !== 'string') return false;

  return true;
}

// PARA INSERIR DENTRO DO MYSQL É PRECISO USAR O MÉTODO DO MYSQL
const createAuthor = async (PrimeiroNome, NomeDoMeio, Sobrenome) => {
  connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [PrimeiroNome, NomeDoMeio, Sobrenome],
  );
}// PARA INSERIR NÃO PRECISAR USAR AWAIT

module.exports = {
  getAll,
  findById,
  isValid,
  createAuthor,
};
