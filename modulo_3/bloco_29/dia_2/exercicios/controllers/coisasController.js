const { Coisa } = require('../models');

const RESULT_OK = 200;
const ERROR = 500;

const getAll = async (_req, res) => {
  try {
    const coisas = await Coisa.findAll();
    res.status(RESULT_OK).json(coisas);
  } catch (e) {
    res.status(ERROR).json({ message: 'erro ao achar todos itens' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const coisa = await Coisa.findByPk(id);
    res.status(RESULT_OK).json(coisa);
  } catch (e) {
    res.status(ERROR).json({ message: 'erro ao buscar pelo id' });
  }
};

const createCoisa = async (req, res) => {
  const { title, author, pageQuantity = 0 } = req.body; // PORQUE IGUAL A ZERO
  try {
    const coisa = await Coisa.create({ title, author, pageQuantity });
    res.status(RESULT_OK).json(coisa);
  } catch(e) {
    res.status(ERROR).json({ message: 'erro ao criar coisa' });
  }
};

const updateCoisa = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity = 0 } = req.body; // PORQUE IGUAL A ZERO
  try {
    const coisa = await Coisa.update({ title, author, pageQuantity }, { where: id });
    res.status(RESULT_OK).json(coisa);
  } catch (e) {
    res.status(ERROR).json({ message: 'erro ao atualizar' });
  }
}

const deleteCoisa = async (req, res) => {
  const { id } = req.params;
  try {
    const coisaDeletada = await Coisa.findByPk(id);
    await coisaDeletada.destroy();
    res.status(RESULT_OK).json(coisaDeletada)
  } catch (e) {
    res.status(ERROR).json({ message: 'não foi possível deletar' });
  }
}

module.exports = {
  getAll,
  getById,
  createCoisa,
  updateCoisa,
  deleteCoisa,
};
