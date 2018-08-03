import { RECEIVE_SINGLE_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
// import { fetchSinglePokemon, fetchAllPokemon } from '../util/api_util';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  const nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return merge(nextState, {[action.payload.pokemon.id]: action.payload.pokemon});
    case RECEIVE_ALL_POKEMON:
      return merge(nextState, action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
