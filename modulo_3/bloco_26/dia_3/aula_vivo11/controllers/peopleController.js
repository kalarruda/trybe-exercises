const router = require('express').Router();
const Services = require('../services/peopleService');

router.get('/pessoas', async (_req, res) => {
  try {
    const people = await Services.getAll();
    return res.status(200).json(people);
  }
  catch(err) {
    console.error(err)
    res.status(500).json({ message: 'Erro ao buscar dados' });
  }
})

router.post('/pessoas', async (req, res) => {
  try {
    const { name, age } = req.body;
    const result = await Services.addPeople({ name, age });
    if(result.error && result.error === 'PERSON_EXISTS')
      return res.status(400).json({ message: 'Pessoa já existe' });
    return res.status(201).json(result);
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: `Erro ao adicionar pessoa` });
    }
})

router.put('/pessoas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    await Services.updatePeople({ id, name, age });
    res.status(200).json({ message: 'pessoa alterada com sucesso' });
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: `Não foi possível alterar pessoa` });
    }
})

router.get('/pessoas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Services.findPeople(id);
    res.status(200).json(result);
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: `pessoa não encontrada` });
    }
})

router.delete('/pessoas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletePeople = await Services.deletePeople(id);
    if(deletePeople.error && deletePeople.error === 'PERSON_DOENST_EXISTS') {
      return res.status(400).json({ message: 'pessoa não encontrada' });
    }
    return res.status(200).json({ message: 'pessoa deletada com sucesso' });
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: `pessoa não encontrada` });
    }
})

module.exports = router;