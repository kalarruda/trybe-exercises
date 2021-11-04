const mysql = require('mysql2/promise'); // promise porque vai trabalhar com fluxo assincrono

const connection = mysql.createPool({
  // pool de conexões faz com que aproveite sempre as novas conexões com mysql sem precisar abrir de novo
  user: 'root',
  password: 'password',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
