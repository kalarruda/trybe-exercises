const Services = require('../services/peopleService');

const getAll = async (_req, res) => {
  try {
    const people = await Services.getAll();
    return res.status(200).json(people);
  }
  catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
}

const addPeople = () => {
  try {
    const { name, age } = req.body;
    const result = await Services.addPeople({ name, age });
    res.status(200).json(result);
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: `pessoa adicionada com sucesso` });
  }
}

module.exports = {
  getAll
}