import { useContext, useState } from "react";
import RegisterContext from "../context/Context";

function FilterRegister() {
  const { register } = useContext(RegisterContext);

  const [filterName, setFilterName] = useState(''); // precisa ser uma string vazia senão o lowercase na linah 12 nao funciona
  const [filterAge, setFilterAge] = useState('');
  const [fiterSex, setFilterSex] = useState('');
  const [filterState, setFilterState] = useState('');

  const filterInfo = (inputName, inputAge, inputSex, inputState) => {
    let filtered = [...register];
    if(inputName) {
      filtered = filtered.filter(({ nome }) => (nome.toLowerCase().includes(inputName.toLowerCase())));
    }
    if(inputAge) {
      filtered = filtered.filter(({ idade }) => idade === inputAge);
    }
    if(inputSex) {
      filtered = filtered.filter(({ sexo }) => (sexo.toLowerCase().includes(inputSex)));
    }
    if(inputState) {
      filtered = filtered.filter(({ estado }) => estado === inputState)
    }
    return filtered;
  }

  return(
   <section>
     <form>
      <label htmlFor="nome">
        Nome
        <input
          name="nome"
          id="nome"
          type="text"
          onChange={ ({target: { value }}) => setFilterName(value) }
          value={ filterName }
        />
      </label>
      <label htmlFor="idade">
        Idade
        <input
          name="idade"
          id="idade"
          type="number"
          onChange={ ({target: { value }}) => setFilterAge(value) }
          value={ filterAge }
        />
      </label>
      <label htmlFor="sexo">
        Sexo
        <select id="sexo" value={ fiterSex } onChange={ ({target: { value }}) => setFilterSex(value) } name="sexo">
          <option value="selecione">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </label>
      <label htmlFor="estado">
        Estado
        <select id="estado" value={ filterState } onChange={ ({target: { value }}) => setFilterState(value) } name="estado" >
        <option value="selecione">Selecione</option>
          <option value="AL">AL</option>
          <option value="PR">PR</option>
          <option value="RJ">RJ</option>
        </select>
      </label>
    </form>
     { filterInfo(filterName, filterAge, fiterSex, filterState).map(({ nome, idade, estado, sexo }, index ) => (
       <ul>
        <li key={ index }>
          <spam>{` NOME: ${ nome } - `}</spam>
          <spam>{` IDADE: ${ idade } - `}</spam>
          <spam>{` ESTADO: ${ estado } - `}</spam>
          <spam>{` SEXO: ${ sexo }`}</spam>
        </li>
       </ul>
     ))}
   </section>
  )
}

export default FilterRegister;
