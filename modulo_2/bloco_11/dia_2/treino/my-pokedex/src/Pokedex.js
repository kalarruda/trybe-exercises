import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} typePokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;