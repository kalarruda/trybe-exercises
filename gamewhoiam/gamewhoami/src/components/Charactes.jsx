import { useContext, useState } from "react";
import GameContext from "../context/GameContext";

function Characters() {

  const { characters, setCharacters } = useContext(GameContext);

  console.log(characters)
  return(
    <div>
      <div>
        {characters.map(({ nome, olhos, pele }, index) => (
          <div key={index}>
            <br></br>
            <spam>{nome} {olhos} {pele}</spam>
          </div>))}
      </div>
    </div>
  )
}

export default Characters;
