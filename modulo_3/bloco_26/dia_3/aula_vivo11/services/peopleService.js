const { ObjectId } = require('bson');
const People = require('../models/peopleModel');

const getAll = async () => {
  return await People.getAll();
}

const addPeople = async ({ name, age }) => {
  const peopleExists = await People.peopleExists({ name, age })
  if(peopleExists) return { error: 'PERSON_EXISTS' };
  return await People.addPeople({ name, age });
}

const findPeople = async (id) => {
  return await People.findPeople(id);
}

const updatePeople = async ({ id, name, age }) => {
  return await People.updatePeople(id, name, age);
}

const deletePeople = async (id) => {
  const idExists = People.idExists(id);
  if(!ObjectId(id)) return { error: 'PERSON_DOENST_EXISTS' };
  return await People.deletePeople(id);
}


module.exports = {
  getAll,
  addPeople,
  findPeople,
  updatePeople,
  deletePeople,
}
