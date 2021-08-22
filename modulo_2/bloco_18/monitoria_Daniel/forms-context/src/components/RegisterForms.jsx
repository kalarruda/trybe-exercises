import React, { useContext, useState } from 'react';
import RegisterContext from '../context/Context';

function RegisterForms() {
  // const { register, setRegister } = useContext(RegisterContext);
  const [stateLocal, setStateLocal] = useState({
    nome: '',
    idade: 0,
    estado: 'AL',
    sexo: 'masculino',
  });

  const { setRegister } = useContext(RegisterContext);
  
  const { nome, idade, estado, sexo } = stateLocal;

  const handleChange = ({ target: { name, value }}) => {
    setStateLocal((initialState) => ({
      ...initialState,
      [name]: value,
    }))
  }

  const handleClick = () => {
    setRegister((initialState) => ([
      ...initialState,
      stateLocal,
    ]));
    setStateLocal({
      nome: '',
      idade: 0,
      estado: 'AL',
      sexo: 'masculino',
    });
  }

  return(
    <form>
      <label htmlFor="nome">
        Nome
        <input
          name="nome"
          id="nome"
          type="text"
          onChange={ handleChange }
          value={ nome }
        />
      </label>
      <label htmlFor="idade">
        Idade
        <input
          name="idade"
          id="idade"
          type="number"
          onChange={ handleChange }
          value={ idade }
        />
      </label>
      <label htmlFor="sexo" value={ sexo }>
        Sexo
        <select id="sexo" onChange={ handleChange } name="sexo">
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </label>
      <label htmlFor="estado">
        Estado
        <select id="estado" onChange={ handleChange } name="estado" value={ estado }>
          <option value="AL">AL</option>
          <option value="PR">PR</option>
          <option value="RJ">RJ</option>
        </select>
      </label>
      <button type="button" onClick={ handleClick }>
        ADICIONE
      </button>
    </form>
  )
}

export default RegisterForms;
