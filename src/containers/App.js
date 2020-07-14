import React, { useState } from 'react';
import { produce } from "immer";
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Nav from '../components/Nav/Nav';
import Router from '../router/Router';

import "./App.scss";
// code-Splitting


function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const cartReducer = (carts, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return carts = action.cart;
    case "UPDATE_PRICE":
      return {
        ...carts,
        final_total: action.price
      };
    default:
      return carts;
  }
}

const options = {
  position: 'top center',
  timeout: 3000,
  offset: '30px',
  transition: 'fade'
}

export default function App() {
  const [carts, dispatch] = useImmerReducer(cartReducer, []);
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          setAuth={setAuth}
          auth={auth} />
        <AlertProvider template={AlertTemplate} {...options}>
          <Router
            carts={carts}
            dispatch={dispatch}
            setAuth={setAuth}
            auth={auth} />
        </AlertProvider>
      </BrowserRouter>
    </div>
  );
}


