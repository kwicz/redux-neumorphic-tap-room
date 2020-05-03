import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  console.log("REDUCER ACTION: ", action)
  const { name, brand, description, alcoholContent, price, remainingPints, id } = action;
  console.log("reducer remaining pints: ", remainingPints)
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
    console.log("reducer selectedKeg return: ", selectedKeg.remainingPints)
    return selectedKeg;
  case c.SELECTED_KEG_NULL:
    console.log("returned SELECTED KEG NULL")
    return null;
  default:
    console.log("returned default state")
    return state;
  }
};