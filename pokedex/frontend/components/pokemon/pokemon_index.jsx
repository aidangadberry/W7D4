import React from 'react';
import { Route } from 'react-router-dom';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

export default class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    const pokeList = this.props.pokemon.map((poke) => (
      <PokemonIndexItem
        key={poke.id}
        poke={poke}
      />
    ));

    return (
      <section className='pokedex'>
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
        <ul>
          {pokeList}
        </ul>
      </section>
    );
  }
}
