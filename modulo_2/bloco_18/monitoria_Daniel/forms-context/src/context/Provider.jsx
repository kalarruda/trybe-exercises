import { useState } from 'react';
import RegisterContext from './Context';

function Provider({ children }) {
  const [register, setRegister] = useState([]);

  const context = { register, setRegister };
  return(
    <RegisterContext.Provider value={ context }>
      { children }
    </RegisterContext.Provider>
  )
}

export default Provider;
