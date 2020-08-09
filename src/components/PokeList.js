import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.css';

class PokeList extends React.Component {
  renderPokemons () {
    return this.props.pokemons.map ((pokemon, index) => {
      return (
        <li key={index}>
          <Pokemon
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
          />
        </li>
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
