import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  console.log("reducer action: ", action);
  const { name, brand, description, alcoholContent, price, remainingPints, id } = action;
  switch (action.type) {
  case c.SELECTED_KEG:
    const selectedKeg = {
      name: name,
      brand: brand,
      description: description,
      alcoholContent: alcoholContent,
      price: price,
      remainingPints: remainingPints,
      id: id
    }
    return selectedKeg;
  default:
    return state;
  }
};