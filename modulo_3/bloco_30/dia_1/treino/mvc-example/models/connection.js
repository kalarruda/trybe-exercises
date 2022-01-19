const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'kalarruda',
  password: 'josecarlos',
  database: 'mvc_example'});

module.exports = connection;
