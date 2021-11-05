// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'kalarruda',
//     password: 'josecarlos',
//     database: 'model_example' });

// module.exports = connection;

const mysql = require('mysql2/promise'); // promise porque vai trabalhar com fluxo assincrono

const connection = mysql.createPool({
  // pool de conexões faz com que aproveite sempre as novas conexões com mysql sem precisar abrir de novo
  host: 'localhost',
  user: 'kalarruda',
  password: 'josecarlos',
  database: 'model_example'
});

module.exports = connection;
