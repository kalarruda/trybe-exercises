import { useState, useContext } from "react";
import GameContext from "../context/GameContext";

function Selects() {
  const [filterEyes, setFilterEyes] = useState({ olhos: '' });
  const [filterSkin, setFilterSkin] = useState({ pele: ''});

  const { characters } = useContext(GameContext);
  
  const filterCharacters = () => {
    const { olhos } = filterEyes;
    const { pele } = filterSkin;
    let filtered=[...characters];
    console.log(olhos, pele)
      if(olhos !== '') {
        filtered = filtered.filter(({ olhos }) => olhos === filterEyes.olhos)
      }
      if(pele !== '') {
        filtered = filtered.filter(({ pele }) => pele === filterSkin.pele)
      }
    return filtered;
  }

  return(
    <section>
      <label htmlFor="olhos">
        Olhos:
        <select id="olhos" name="olhos" value={ filterEyes.olhos } onChange={ ({ target: { value } }) => setFilterEyes({ olhos: value }) }>
          <option value="">Cor</option>
          <option value="claros">Claros</option>
          <option value="escuros">Escuros</option>
        </select>
      </label>
      <label htmlFor="pele">
        Pele:
        <select id="pele" name="pele" value={ filterSkin.pele } onChange={ ({ target: { value } }) => setFilterSkin({ pele: value }) }>
          <option value="">Cor</option>
          <option value="clara">Clara</option>
          <option value="escura">Escura</option>
        </select>
      </label>
      <div>
        <div>
          {filterCharacters().map(({ nome, olhos, pele }, index) => (
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
