import React, { useState } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Nav from '../components/Nav/Nav';
import Router from '../router/Router';
import { ShopContext } from '../contexts/shopCartContext/ShopCartContext';
import {
  useImmerReducer,
  cartReducer,
  productReducer,
  userReducer
} from '../reducers/reducers'



export default function App() {
  const [carts, cartDispatch] = useImmerReducer(cartReducer, []);
  const [products, productDispatch] = useImmerReducer(productReducer, []);
  const [user, userDispatch] = useImmerReducer(userReducer, { auth: false });


  const options = {
    position: 'top center',
    timeout: 3000,
    offset: '30px',
    transition: 'fade'
  }

  return (
    <div className="container mx-auto px-3">
      <ShopContext.Provider value={{ carts, products, user, cartDispatch, productDispatch, userDispatch }}>
        <BrowserRouter>
          <Nav />
          <AlertProvider template={AlertTemplate} {...options}>
            <Router />
          </AlertProvider>
        </BrowserRouter>
      </ShopContext.Provider>
    </div>
  );
}


