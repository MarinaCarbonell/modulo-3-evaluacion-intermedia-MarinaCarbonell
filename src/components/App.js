import React from 'react';
import '../stylesheets/App.css';
import pokemonsfromApi from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {pokemons: pokemonsfromApi};
  }

  render () {
    console.log (this.state);
    return (
      <div>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
