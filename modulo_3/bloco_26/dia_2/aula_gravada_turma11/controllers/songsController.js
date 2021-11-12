// const Songs = require('../models/songsModel');
const Services = require('../services/songServices');

const getAllSongs = async (_req, res) => {
  try {
    const songs = await Services.getAllServices();
    res.status(200).json(songs);
  }
  catch(error) {
    console.error(error);
    res.status(500).json({ message: 'Ocorreu erro ao buscar dados' });
  }
}

const createSong = async (req, res) => {
  try {
    const { name, album } = req.body;
    const song = await Services.createSongServices({name, album})
    if(song.error && song.error === 'MUSIC_EXISTS')
      return res.status(400).json({ error: `o nome ${name} já existe` });
    return res.status(200).json(song);
  }
  catch(err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao criar música' });
  }
}

module.exports = {
  getAllSongs,
  createSong,
}
