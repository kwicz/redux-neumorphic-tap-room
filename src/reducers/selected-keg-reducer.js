import * as c from './../actions/ActionTypes';

export default (state = null, action) = (keg) => {
  switch (action.type) {
  case c.SELECTED_KEG:
    return state = keg;
  default:
    return state;
  }
};