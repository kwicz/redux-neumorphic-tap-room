import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import InitialState from './components/InitialState';

const store = createStore(
  rootReducer,
  InitialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
