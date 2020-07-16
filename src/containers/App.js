import React, { useState } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Nav from '../components/Nav/Nav';
import Router from '../router/Router';
import { useImmerReducer, cartReducer } from '../reducers/reducers'

import "../styles/App.scss";

export default function App() {
  const [carts, dispatch] = useImmerReducer(cartReducer, []);
  const [auth, setAuth] = useState(false);

  const options = {
    position: 'top center',
    timeout: 3000,
    offset: '30px',
    transition: 'fade'
  }

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


