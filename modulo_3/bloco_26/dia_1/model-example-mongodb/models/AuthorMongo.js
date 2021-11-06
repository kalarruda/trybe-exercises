// const connection = require('./connectionMysql');
const connection = require('./connectionMongo');

const getAll = async () => {
  return connection()
  .then((db) => db.collection('authors').find().toArray())
  .then((authors) => 
    authors.map(({ _id, PrimeiroNome, NomeDoMeio, Sobrenome }) => 
      getNewAuthor({
        id: _id,
        PrimeiroNome,
        NomeDoMeio,
        Sobrenome,
      })
    )
  )
};

module.exports = {
  getAll,
};
