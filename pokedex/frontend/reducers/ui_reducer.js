import merge from 'lodash/merge';

const uiReducer = (state = {}, action) => {
  const nextState = merge({}, state);

  switch(action.type) {
    default:
      return state;
  }
};

export default uiReducer;
