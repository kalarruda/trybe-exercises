import { useContext, useState } from "react";
import RegisterContext from "../context/Context";

function FilterRegister() {
  const { register } = useContext(RegisterContext);

  const [filter, setFilter] = useState([]);

  const filterInfo = (inputName) => {
    let filtered = [];
    if(inputName) {
      filtered = register.filter(({ nome }) => nome.toLowerCase().includes(inputName.toLowerCase()));
      return filtered;
    }
    return register;
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
          onChange={ ({target: { value }}) => setFilter(value) }
          value={ filter }
        />
      </label>
      {/* 
      <label htmlFor="idade">
        Idade
        <input
          name="idade"
          id="idade"
          type="number"
          onChange={ ({target: { value }}) => setFilter(value) }
          // value={ idade }
        />
      </label>
      <label htmlFor="sexo" >
        Sexo
        <select id="sexo" onChange={ ({target: { value }}) => setFilter(value) } name="sexo">
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </label>
      <label htmlFor="estado">
        Estado
        <select id="estado" onChange={ ({target: { value }}) => setFilter(value) } name="estado" >
          <option value="AL">AL</option>
          <option value="PR">PR</option>
          <option value="RJ">RJ</option>
        </select>
      </label> */}
    </form>
     { filterInfo(filter).map(({ nome, idade, estado, sexo }, index ) => (
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
