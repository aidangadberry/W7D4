import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import { Route } from 'react-router-dom';

export default class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    const poke = this.props.poke;
    return (
      <section className='pokemonDetail'>
        <ul>
          <li><img src={poke.image_url} /></li>
          <li>{poke.name}</li>
          <li>{poke.poke_type}</li>
          <li>{poke.attack}</li>
          <li>{poke.defense}</li>
          <li>{poke.moves}</li>
          <li>{poke.item_ids}</li>
        </ul>
        <Route
          path='/pokemon/:pokemonId/items/:itemId'
          component={ItemDetailContainer}
        />
      </section>
    );
  }
}
