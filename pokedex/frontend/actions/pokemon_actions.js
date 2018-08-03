import { fetchSinglePokemon, fetchAllPokemon } from '../util/api_util';

export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveSinglePokemon = payload => ({
  type: RECEIVE_SINGLE_POKEMON,
  payload
});

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestSinglePokemon = id => dispatch => (
  fetchSinglePokemon(id).then(payload => dispatch(receiveSinglePokemon(payload)))
);

export const requestAllPokemon = () => dispatch => (
  fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);
