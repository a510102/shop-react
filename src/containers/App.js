import React, { useState } from 'react';
import { produce } from "immer";
import {
  BrowserRouter,
} from 'react-router-dom';
import Nav from '../components/Nav';
import Router from '../components/Router';

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

export default function App() {
  const [carts, dispatch] = useImmerReducer(cartReducer, []);
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav
          setLogin={setLogin}
          login={login} />
        <Router carts={carts} dispatch={dispatch} login={login} setLogin={setLogin} />
      </BrowserRouter>
    </div>
  );
}


