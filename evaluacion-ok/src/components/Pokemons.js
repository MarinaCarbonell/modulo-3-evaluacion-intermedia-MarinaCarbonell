import React from 'react';

class Pokemon extends React.Component {
  renderTypes () {
    return this.props.types.map ((type, index) => {
      return <li key={index}>{type}</li>;
    });
  }

  render () {
    return (
      <div className="pokemon">
        <li>
          <h2>{this.props.name}</h2>
          <img src={this.props.url} />
          <ul>
            {this.renderTypes ()}
          </ul>
        </li>
      </div>
    );
  }
}

export default Pokemon;
