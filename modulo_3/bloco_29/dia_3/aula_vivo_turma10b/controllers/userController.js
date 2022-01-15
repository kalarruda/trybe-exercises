const express = require('express');

const { User, Product } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const newUser = await User.create({ name, username, email, password });
    return res.status(200).json(newUser);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao criar usuário' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao encontrar usuários' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { includeProduct } = req.query
  try {
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'usuário naõ existe' });

    if (!includeProduct) return res.status(200).json(user);

    const products = await Product.findAll({ where: { userId: id } })
    return res.status(200).json({ user, products })

  } catch (e) {
    return res.status(500).json({ message: 'erro ao encontrar usuário' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, username, email, password } = req.body;
  const { id } = req.params;
  try {
    const [updateUser] = await User.update(
      { name, username, email, password },
      { where: { id } },
    );
    if (!updateUser) return res.status(404).json({ message: 'usuário não encontrado' });
  
    return res.status(201).json(updateUser);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao atualizar usuário' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.destroy({ where: { id } });

    if (!user) return res.status(404).json({ message: 'usuário não encontrado' });
    return res.status(200).json({ message: 'usuário excluído com sucesso' });
  } catch (e) {
    return res.status(500).json({ message: 'erro ao deletar usuário' });
  }
});

module.exports = router;
