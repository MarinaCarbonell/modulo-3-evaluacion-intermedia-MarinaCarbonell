import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  renderPokemons () {
    console.log (this.props);
    return this.props.pokemons.map ((pokemon, index) => {
      return (
        <Pokemon
          key={index}
          name={pokemon.name}
          url={pokemon.url}
          types={pokemon.types}
        />
      );
    });
  }
  render () {
    return (
      <div>
        <ul>
          {this.renderPokemons ()}
        </ul>
      </div>
    );
  }
}

export default PokeList;
