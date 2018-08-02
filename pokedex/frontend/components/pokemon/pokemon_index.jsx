import React from 'react';

export default class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    const pokeList = this.props.pokemon.map((poke) => (
      <li key={poke.id}>
        {poke.name}
        <img src={poke.image_url} />
      </li>
    ));

    return (
      <ul>
        {pokeList}
      </ul>
    );
  }
}
