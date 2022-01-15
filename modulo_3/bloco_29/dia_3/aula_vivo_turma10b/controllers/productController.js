const express = require('express');

const { Product, User } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, description, price, userId } = req.body;
  try {
    const newProduct = await Product.create({ name, description, price, userId });
    return res.status(200).json(newProduct);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao criar produto' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const allProducts = await Product.findAll();
    return res.status(200).json(allProducts);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao encontrar produtos' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      include: { model: User, as: 'user', attributes: { exclude: ['password'] } },
    });

    if (!product) return res.status(404).json({ message: 'produto naõ existe' });

    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao encontrar produto' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, description, price, userId } = req.body;
  const { id } = req.params;
  try {
    const [updateProduct] = await Product.update(
      { name, description, price, userId },
      { where: { id } },
    );
    if (!updateProduct) return res.status(404).json({ message: 'usuário não encontrado' });
  
    return res.status(201).json(updateProduct);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao atualizar usuário' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Product.destroy({ where: { id } });

    if (!user) return res.status(404).json({ message: 'usuário não encontrado' });
    return res.status(200).json({ message: 'usuário excluído com sucesso' });
  } catch (e) {
    return res.status(500).json({ message: 'erro ao deletar usuário' });
  }
});

module.exports = router;
