import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  const nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return merge(nextState, action.payload.items);
    default:
      return state;
  }
};

export default itemsReducer;
