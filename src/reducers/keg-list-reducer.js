import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, description, alcoholContent, price, remainingPints, id } = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        description: description,
        alcoholContent: alcoholContent,
        price: price,
        remainingPints: remainingPints,
        id: id
      }
    });
  case c.DELETE_KEG:
    const newState = { ...state };
    delete newState[id];
    return newState;
  case c.BUY_PINT:
    const newRemainingPints = state[id].remainingPints - 1;
    return state;
  default:
    return state;
  }
};