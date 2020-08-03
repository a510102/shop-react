import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { cartstReducer, productsReducer, userReducer } from './reducers/reducers';
import App from './containers/App';

import './tailwind.output.css'

const rootReducer = combineReducers({ cartsState: cartstReducer, productsState: productsReducer, authState: userReducer })

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

