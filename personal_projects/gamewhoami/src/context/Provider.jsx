import GameContext from './GameContext';

function Provider({ children }) {
  const characters = [
    { 
    nome: 'José',
    olhos: 'claros',
    pele: 'clara',
  },

   {
    nome: 'Giselle',
    olhos: 'escuros',
    pele: 'clara',
  },

  {
    nome: 'Cintia',
    olhos: 'escuros',
    pele: 'escura',
  },
  ];
  const context = { characters };
  
  return(
    <GameContext.Provider value={ context }>
      { children }
    </GameContext.Provider>
  )
}

export default Provider;
