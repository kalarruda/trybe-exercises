const router = require('express').Router();

const STATUS_OK = 200;
const ERROR = 500;

const { Product } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const addProduct = await Product.create({ name });
    return res.status(STATUS_OK).json(addProduct);
  } catch (e) {
    return res.status(ERROR).json({ message: 'erro ao criar produto' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const allProducts = await Product.findAll();
    return res.status(STATUS_OK).json(allProducts);
  } catch (e) {
    return res.status(ERROR).json({ message: 'erro ao encontrar todos produtos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getById = await Product.findByPk(id);
    return res.status(STATUS_OK).json(getById);
  } catch (e) {
    return res.status(ERROR).json({ message: 'erro ao encontrar produto pelo id' });
  }
});

module.exports = router;
