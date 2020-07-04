import React, { useState } from 'react';
import { produce } from "immer";
import Login from './Login';
import Home from "./Home";
import About from './About';
import ConnectMe from './ConnectMe';
import Products from './Products';
import Nav from './nav';
import Shop from './Shop';
import ShopCart from './ShopCart';
import "./App.css";
import { ShopCartContext } from './ShopCartContext';


function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

const cartReducer = (carts, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return carts = action.cart;
    case "UPDATE_PRICE":
      carts.carts.final_total = action.price;
      return;
    default:
      return carts;
  }
}

export default function App() {
  const [carts, dispatch] = useImmerReducer(cartReducer, []);
  const [path, setPath] = useState("products");
  const [login, setLogin] = useState(true);

  const handlePath = text => {
    setPath(text);
  }

  return (
    <div className="App">
      <Nav
        handlePath={handlePath}
        setLogin={setLogin}
        login={login} />
      {
        login && path === "products" ? <Products /> : (
          path === "shop" ? (
            <ShopCartContext.Provider value={{ carts, dispatch }}>
              <ShopCart />
              <Shop />
            </ShopCartContext.Provider>) : (
              !login && path === "login" ? <Login handlePath={handlePath} setLogin={setLogin} /> : (
                !login && path === "about" ? <About /> : (
                  !login && path === "connectme" ? <ConnectMe /> : <Home />
                )
              )
            )
        )
      }
    </div>
  );
}


