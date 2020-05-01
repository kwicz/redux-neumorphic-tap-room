import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, description, alcoholContent, price, id } = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        description: description,
        alcoholContent: alcoholContent,
        price: price,
        id: id
      }
    });
  case c.DELETE_KEG:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};