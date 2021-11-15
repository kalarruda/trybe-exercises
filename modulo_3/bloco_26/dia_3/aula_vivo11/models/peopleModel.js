const connection = require('./connection');
const { ObjectId } = require('mongodb');

const peopleExists = async ({ name, age }) => {
  const db = await connection();
  const result = await db.collection('people').findOne({ name, age });
  return result !== null;
}

const idExists = async (id) => {
  const db = await connection();
  const result = await db.collection('people').findOne({ _id: ObjectId(id) })
  return result !== null;
}

const getAll = async () => {
  const db = await connection();
  return db.collection('people').find().toArray();
}

const addPeople = async ({ name, age }) => {
  const db = await connection();
  const result = await db.collection('people').insertOne({ name, age });
  return { id: result.insertedId, name, age };
}

const findPeople = async (id) => {
  if(!ObjectId.isValid(id)) return null;
    const db = await connection();
  const result = db.collection('people').findOne(ObjectId(id));
  return result;
}

const updatePeople = async (id, name, age) => {
  if(!ObjectId.isValid(id)) return null;
  const db = await connection();
  const result = db.collection('people').updateOne({ _id: ObjectId(id) }, { $set: { name, age } })
  return result;
}

const deletePeople = async (id) => {
  if(!ObjectId.isValid(id)) return null;
  const db = await connection();
  return db.collection('people').deleteOne({ _id: ObjectId(id) });
}

module.exports = {
  getAll,
  addPeople,
  findPeople,
  peopleExists,
  deletePeople,
  updatePeople,
  idExists,
}