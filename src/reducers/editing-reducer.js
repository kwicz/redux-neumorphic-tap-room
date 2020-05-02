import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
  case c.EDITING:
    return !state;
  default:
    return state;
  }
};