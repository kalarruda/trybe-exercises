import { useState, useContext } from "react";
import GameContext from "../context/GameContext";

function Selects() {
  const [filterEyes, setFilterEyes] = useState('');
  const [filterSkin, setFilterSkin] = useState('');

  const { characters } = useContext(GameContext);

  // const filterCharacters = (inputEyes, inputSkin) => {
  //   let filtered=[...characters];
  //   if(filterEyes !== 'cor' || filterSkin !== 'cor') {
  //     if(inputEyes === filterEyes) {
  //       filtered = filtered.filter(({ olhos }) => olhos === inputEyes)
  //     }
  //     if(inputSkin === filterSkin) {
  //       filtered = filtered.filter(({ pele }) => pele === inputSkin)
  //     }
  //     return filtered;
  //   }
  //   return characters;
  // }

  const filterCharacters = (inputEyes, inputSkin) => {
    let filtered=[...characters];
      if(inputEyes !== 'cor') {
        filtered = filtered.filter(({ olhos }) => olhos === inputEyes)
      }
      if(inputSkin !== 'cor') {
        filtered = filtered.filter(({ pele }) => pele === inputSkin)
      }
    return filtered;
  }

  return(
    <section>
      <label htmlFor="olhos">
        Olhos
        <select id="olhos" name="olhos" value={ filterEyes } onChange={ ({ target: { value } }) => setFilterEyes(value) }>
          <option value="cor">Cor</option>
          <option value="claros">Claros</option>
          <option value="escuros">Escuros</option>
        </select>
      </label>
      <label htmlFor="pele">
        Pele
        <select id="pele" name="pele" value={ filterSkin } onChange={ ({ target: { value } }) => setFilterSkin(value) }>
          <option value="cor">Cor</option>
          <option value="clara">Clara</option>
          <option value="escura">Escura</option>
        </select>
      </label>
      <div>
      <div>
        {filterCharacters(filterEyes, filterSkin).map(({ nome, olhos, pele }, index) => (
          <div key={index}>
            <br></br>
            <spam>{ `NOME: ${nome} - OLHOS: ${olhos} - PELE: ${pele}` }</spam>
          </div>))}
      </div>
    </div>
    </section>
  )
}

export default Selects;
