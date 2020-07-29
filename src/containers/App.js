import React, { useState } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Nav from '../components/Nav/Nav';
import Router from '../router/Router';



export default function App() {
  const [auth, setAuth] = useState(true);

  const options = {
    position: 'top center',
    timeout: 3000,
    offset: '30px',
    transition: 'fade'
  }

  return (
    <div className="container mx-auto px-3">
      <BrowserRouter>
        <Nav
          setAuth={setAuth}
          auth={auth} />
        <AlertProvider template={AlertTemplate} {...options}>
          <Router
            setAuth={setAuth}
            auth={auth} />
        </AlertProvider>
      </BrowserRouter>
    </div>
  );
}


