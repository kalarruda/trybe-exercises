import GameContext from './GameContext';
import { useState } from 'react';


function Provider({ children }) {
  const [characters, setCharacters] = useState([
    { 
    nome: 'José',
    olhos: 'claros',
    pele: 'clara',
  },

   {
    nome: 'Giselle',
    olhos: 'escuros',
    pele: 'clara',
  },

  {
    nome: 'Cintia',
    olhos: 'escuros',
    pele: 'escura',
  },
  ]);
  const context = { characters, setCharacters };
  
  return(
    <GameContext.Provider value={ context }>
      { children }
    </GameContext.Provider>
  )
}

export default Provider;
