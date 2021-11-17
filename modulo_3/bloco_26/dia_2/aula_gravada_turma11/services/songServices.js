const Songs = require('../models/songsModel');

const getAllServices = async () => {
  const data = await Songs.getAll();
  return data;
}

const createSongServices = async ({ name, album }) => {
  const songExists = await Songs.songExist({ name });
  if(songExists) return { error: 'MUSIC_EXISTS' }
  return await Songs.create({ name, album });
}

const deleteSongService = async ({ name }) => {
  const songExist = await Songs.songExist({ name });
  if(!songExist) return { error: 'MUSIC_DOENST_EXISTS' };
  return await Songs.deleteSong({ name });
}

module.exports = {
  getAllServices,
  createSongServices,
  deleteSongService,
}