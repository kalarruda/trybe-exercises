import { useContext, useState } from "react";
import GameContext from "../context/GameContext";

function Characters() {

  const { characters, setCharacters } = useContext(GameContext);

  // const addCharacters = () => {
  //   setCharacters((initialState) => ({
  //     ...initialState,
      
  //   })
  //   { nome: 'jose',
  //     olhos: 'claros',
  //     pele: 'clara',
  //   },
  //   { nome: 'giselle',
  //     olhos: 'escuros',
  //     pele: 'clara',
  //   },
  //  {  nome: 'cintia',
  //     olhos: 'escuros',
  //     pele: 'escura',
  //   }
  //   )
  // }
  const jose = {
    olhos: 'claros',
    pele: 'clara',
  }

  const giselle = {
    olhos: 'escuros',
    pele: 'clara',
  }

  const cintia = {
    olhos: 'escuros',
    pele: 'escura',
  }
  
  console.log('ARRAAAAAY',characters)
  return(
    <div>
      <br></br>
      {/* <div>
        {characters.map(({ nome, olhos, pele }, index) => (
          <spam key={index} >{nome}</spam>))}
      </div> */}
      <div>
        <spam>Jose</spam>
        <spam>{` Olhos: ${jose.olhos}`}</spam>
        <spam>{` Pele: ${jose.pele} `}</spam>
      </div>
      <br></br>
      <div>
        <spam>Giselle</spam>
        <spam>{` Olhos: ${giselle.olhos}`}</spam>
        <spam>{` Pele: ${giselle.pele} `}</spam>
      </div>
      <br></br>
      <div>
        <spam>Cintia</spam>
        <spam>{` Olhos: ${cintia.olhos}`}</spam>
        <spam>{` Pele: ${cintia.pele} `}</spam>
      </div>
    </div>
  )
}

export default Characters;
