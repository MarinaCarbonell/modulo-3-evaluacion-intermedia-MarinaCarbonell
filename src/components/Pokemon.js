import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Pokemon.css';

class Pokemon extends React.Component {
  renderTypes () {
    return this.props.types.map ((type, index) => {
      return <li key={index}>{type}</li>;
    });
  }

  render () {
    return (
      <div className="pokemon">
        <h2 className="pokemonName">{this.props.name}</h2>
        <img src={this.props.url} alt={this.props.name} />
        <ul>
          {this.renderTypes ()}
        </ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemon;
