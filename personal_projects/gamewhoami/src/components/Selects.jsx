import { useState } from "react";

function Selects() {
  const [details, setDetails] = useState({
    pele: '',
    olhos: '',
  });
  
  const { pele, olhos } = details;

  const handleChange = ({ target: { name, value }}) => {
    setDetails((previousDetails) => ({
      ...previousDetails,
      [name]: value,
    }));
  }

  return(
    <section>
      <label htmlFor="olhos">
        Olhos
        <select id="olhos" name="olhos" value={ olhos } onChange={ handleChange }>
          <option value="cor">Cor</option>
          <option value="claros">Claros</option>
          <option value="escuros">Escuros</option>
        </select>
      </label>
      <label htmlFor="pele">
        Pele
        <select id="pele" name="pele" value={ pele } onChange={ handleChange }>
          <option value="cor">Cor</option>
          <option value="clara">Clara</option>
          <option value="escura">Escura</option>
        </select>
      </label>
    </section>
  )
}

export default Selects;
