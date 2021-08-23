import GameContext from './GameContext';
import { useState } from 'react';


function Provider({ children }) {
  const [characters, setCharacters] = useState([]);
  const context = { characters, setCharacters };
  
  return(
    <GameContext.Provider value={ context }>
      { children }
    </GameContext.Provider>
  )
}

export default Provider;
