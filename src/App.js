import React, { useState, Suspense } from 'react';
import { produce } from "immer";
import Nav from './Nav';
import "./App.css";
import { ShopCartContext } from './ShopCartContext';

// code-Splitting

const Login = React.lazy(() => import('./Login'));
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const ConnectMe = React.lazy(() => import('./ConnectMe'));
const Products = React.lazy(() => import('./Products'));
const Shop = React.lazy(() => import('./Shop'));
const ShopCart = React.lazy(() => import('./ShopCart'));
const CouponsList = React.lazy(() => import('./CouponsList'));
const OrderList = React.lazy(() => import('./OrderList'));



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
  const [path, setPath] = useState("/");
  const [login, setLogin] = useState(false);

  const handlePath = text => {
    setPath(text);
  }

  return (
    <div className="App">
      <Nav
        handlePath={handlePath}
        setLogin={setLogin}
        login={login} />
      <Suspense fallback={<div> Loading ...</div>}>
        {
          login && path === "products" ? <Products /> : (
            login && path === "orderlist" ? <OrderList /> : (
              login && path === "coupon" ? <CouponsList /> : (
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
            )
          )
        }
      </Suspense>
    </div>
  );
}


