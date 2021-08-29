import GameContext from './GameContext';

function Provider({ children }) {
  const characters = [
    { 
    nome: 'José',
    olhos: 'claros',
    pele: 'clara',
    chapeu: 'sim',
    sexo: 'masculino',
    cabelo: 'castanho',
  },

   {
    nome: 'Giselle',
    olhos: 'escuros',
    pele: 'clara',
    chapeu: 'nao',
    sexo: 'feminino',
    cabelo: 'castanho',
  },

  {
    nome: 'Cintia',
    olhos: 'escuros',
    pele: 'escura',
    chapeu: 'sim',
    sexo: 'feminino',
    cabelo: 'loiro',
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
