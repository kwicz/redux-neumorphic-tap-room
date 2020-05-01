import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brand, description, alcoholContent, price, remainingPints, id } = action;
  switch (action.type) {
  case c.SELECTED_KEG:
    const newState = {
      name: name,
      brand: brand,
      description: description,
      alcoholContent: alcoholContent,
      price: price,
      remainingPints: remainingPints,
      id: id
    }
    return newState;
  default:
    return state;
  }
};