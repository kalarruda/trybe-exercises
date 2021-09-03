import GameContext from './GameContext';
import woman1  from '../images/woman1.jpg';
import woman2  from '../images/woman2.jpg';
import man from '../images/man.jpg'


function Provider({ children }) {
  const characters = [
    { 
    nome: 'José',
    olhos: 'claros',
    pele: 'clara',
    chapeu: 'sim',
    sexo: 'masculino',
    cabelo: 'castanho',
    src: man,
  },
  
  {
    nome: 'Giselle',
    olhos: 'claros',
    pele: 'clara',
    chapeu: 'nao',
    sexo: 'feminino',
    cabelo: 'castanho',
    src: woman1,
  },
  
  {
    nome: 'Cintia',
    olhos: 'escuros',
    pele: 'escura',
    chapeu: 'sim',
    sexo: 'feminino',
    cabelo: 'loiro',
    src: woman2,
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
