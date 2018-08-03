import values from 'lodash/values';

// export const selectSinglePokemon = (state, id) => {
//   return state.entities.pokemon[id];
// };

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  return state.entities.items[itemId];
};
