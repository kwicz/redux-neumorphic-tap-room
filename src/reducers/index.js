import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import selectedKegReducer from './selected-keg-reducer';
import editingReducer from './editing-reducer';
import { combineReducers } from 'redux';

// const store = createStore(rootReducer);

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  selectedKeg: selectedKegReducer,
  editing: editingReducer
});

export default rootReducer;