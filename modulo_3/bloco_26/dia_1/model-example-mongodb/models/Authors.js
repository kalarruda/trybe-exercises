const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const NomeCompleto = [firstName, middleName, lastName].filter((algo) => algo).join(' ');
  // O FILTER AQUI IGNORA O NULL, LOGO SE O middleName TIVER NULL NÃO APARECE
  return {
    id,
    PrimeiroNome: firstName,
    NomeDoMeio: middleName,
    UltimoNome: lastName,
    NomeCompleto,
  }
}
// const serialize = (authorData) => {
//   return {
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name,
//   }
// }

const getAll = async () => {
  return connection()
      .then((db) => db.collection('authors').find().toArray())
          .then((authors) =>
              authors.map(({ _id, firstName, middleName, lastName }) =>
              getNewAuthor({
                  id: _id,
                  firstName,
                  middleName,
                  lastName,
              })
          )
      );
}

// const findById = async (authorID) => connection()
// .then((db) => db.collection('authors').find({ author_id: Number(authorID) }).toArray());

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
      return null;
  }
  const authorData = await connection()
      .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

//PARA VALIDAR SE ELES ESTÃO PREENCHIDOS
const isValid = (firstName, middleName, lastName) => {
  if(!firstName || typeof firstName !=='string') return false;
  if(!lastName || typeof lastName !== 'string') return false;
  if(typeof middleName !== 'string') return false;

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
