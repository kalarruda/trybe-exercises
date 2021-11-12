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

module.exports = {
  getAllServices,
  createSongServices,
}