const express = require('express');

const { SellOff } = require('../models');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, discount, startDate, endDate } = req.body;
  const start = new Date(startDate);
  const end = new Date(endDate);

  try {
    const newSellOff = await SellOff.create({ name, discount, startDate: start, endDate: end });
    return res.status(200).json(newSellOff);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao criar liquidação' });
  }
});

router.get('/', async (_req, res) => {
  try {
    const allSellsOff = await SellOff.findAll();
    console.log(allSellsOff);
    return res.status(200).json(allSellsOff);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao encontrar liquidação' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const sellOff = await SellOff.findByPk(id)

    if (!sellOff) return res.status(404).json({ message: 'liquidação não existe' });

    return res.status(200).json(sellOff);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao encontrar liquidação' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, discount, startDate, endDate } = req.body;
  const { id } = req.params;
  try {
    const [updateSellOff] = await SellOff.update(
      { name, discount, startDate, endDate },
      { where: { id } },
    );
    if (!updateSellOff) return res.status(404).json({ message: 'liquidação não encontrado' });
  
    return res.status(201).json(updateSellOff);
  } catch (e) {
    return res.status(500).json({ message: 'erro ao atualizar liquidação' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const sellOff = await SellOff.destroy({ where: { id } });

    if (!sellOff) return res.status(404).json({ message: 'liquidação não encontrado' });
    return res.status(200).json({ message: 'liquidação excluído com sucesso' });
  } catch (e) {
    return res.status(500).json({ message: 'erro ao deletar liquidação' });
  }
});

module.exports = router;
