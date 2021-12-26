const express = require('express');
const { User } = require('../models');
const router = require('express').Router();

const ERROR = 500;
const STATUS_OK = 200;

router.get('/', async (_req, res) => {
  try {
    const getAll = await User.findAll();
    console.log(getAll);
    return res.status(STATUS_OK).json(getAll);
  } catch (e) {
    return res.status(ERROR).json({ message: 'erro ao encontrar usuários' });
  }
});

// URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email }});

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  const { fullName, email, phone_number } = req.body;
  try {
    const createUser = await User.create({ fullName, email, phone_number });
    console.log(createUser);
    return res.status(STATUS_OK).json(createUser);
  } catch(e) {
    return res.status(ERROR).json({ message: 'erro ao criar usuário' });
  }
});

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
router.put('/:id', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;

    const [updateUser] = await User.update(
      { fullName, email },
      { where: { id } },
    );

    console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado;

    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(STATUS_OK).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(ERROR).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy(
      { where: { id } },
    );

    console.log(deleteUser) // confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(STATUS_OK).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(ERROR).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
