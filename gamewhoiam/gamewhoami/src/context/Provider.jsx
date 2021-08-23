import GameContext from './GameContext';
import { useState } from 'react';


function Provider({ children }) {
  const [state, setState] = useState([]);
  const context = { state, setState };
  
  return(
    <GameContext.Provider value={ context }>
      { children }
    </GameContext.Provider>
  )
}

export default Provider;
