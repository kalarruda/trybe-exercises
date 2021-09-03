import { useState, useContext } from "react";
import GameContext from "../context/GameContext";
import woman1 from '../images/woman1.jpg';

function Selects() {
  const [filterEyes, setFilterEyes] = useState({ olhos: '' });
  const [filterSkin, setFilterSkin] = useState({ pele: '' });
  const [filterHat, setFilterHat] = useState({ chapeu: '' });
  const [filterSex, setFilterSex] = useState({ sexo: '' });
  const [filterHair, setFilterHair] = useState({ cabelo: ''});

//   const [ state, setState] =useState(["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"])
//   const [buscar, setBuscar] = useState('')

// let indice = state.indexOf(buscar); // 2
// if(indice >= 0){
  //   state.splice(indice, 1);
  //   setState(state)
  // }
  // console.log(state);
  
    const { characters } = useContext(GameContext);

  const filterCharacters = () => {
    const { olhos } = filterEyes;
    const { pele } = filterSkin;
    const { chapeu } = filterHat;
    const { sexo } = filterSex;
    const { cabelo } =filterHair;
    let filtered=[...characters];
      if(olhos !== '') {
        filtered = filtered.filter(({ olhos }) => olhos === filterEyes.olhos)
      }
      if(pele !== '') {
        filtered = filtered.filter(({ pele }) => pele === filterSkin.pele)
      }
      if(chapeu !== '') {
        filtered = filtered.filter(({ chapeu }) => chapeu === filterHat.chapeu);
      }
      if(sexo !== '') {
        filtered = filtered.filter(({ sexo }) => sexo === filterSex.sexo);
      }
      if(cabelo !== ''){
        filtered = filtered.filter(({ cabelo }) => cabelo === filterHair.cabelo);
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
      <label htmlFor="chapeu">
        Chapéu:
        <select id="chapeu" name="chapeu" value={ filterHat.chapeu } onChange={ ({ target: { value } }) => setFilterHat({ chapeu: value }) }>
          <option value="">Possui</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </label>
      <label htmlFor="sexo">
        Sexo:
        <select id="sexo" name="sexo" value={ filterSex.sexo } onChange={ ({ target: { value } }) => setFilterSex({ sexo: value }) }>
          <option value="">Tipo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </label>
      <label htmlFor="cabelo">
        Cabelo:
        <select id="cabelo" name="cabelo" value={ filterHair.cabelo } onChange={ ({ target: { value } }) => setFilterHair({ cabelo: value }) }>
          <option value="">Cor</option>
          <option value="castanho">Castanho</option>
          <option value="loiro">Loiro</option>
        </select>
      </label>
      <div>
        <div>
          {filterCharacters().map(({ nome, olhos, pele, chapeu, sexo, cabelo, src }, index) => (
            <div key={index}>
              <br></br>
              <spam>{ `NOME: ${nome} - OLHOS: ${olhos} - PELE: ${pele} - CHAPEU: ${chapeu} - SEXO: ${sexo} - CABELO: ${cabelo}` }
              <img src={ src } alt={ nome }/></spam>
            </div>))}
        </div>
      </div>
    </section>
  )
}

export default Selects;
