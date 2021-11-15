const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  return db.collection('people').find().toArray();
}


const addPeople = async ({ name, age }) => {
  const db = await connection();
  const result = await db.connection('people').InsertOne({ name, age });
  return result;
}

module.exports = {
  getAll,
  addPeople,
}