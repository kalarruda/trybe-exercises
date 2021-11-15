const People = require('../models/peopleModel');

const getAll = async () => {
  return await People.getAll();
}

const addPeople = async ({ name, age }) => {
  return await People({ _id, name, age });
}


module.exports = {
  getAll,
  addPeople,
}
