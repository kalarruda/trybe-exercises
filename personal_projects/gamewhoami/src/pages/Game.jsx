import { useContext } from 'react';
import Characters from '../components/Charactes';
import Selects from '../components/Selects';
import GameContext from '../context/GameContext';



function Game() {
  return(
    <div>
      <Selects />
      {/* <Characters /> */}
    </div>

  )
}

export default Game;
