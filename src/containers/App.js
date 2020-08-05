import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Nav from '../components/Nav/Nav';
import { Footer } from '../components/Footer';
import Router from '../router/Router';

import './App.css';



export default function App() {
  const options = {
    position: 'top center',
    timeout: 1000,
    offset: '30px',
    transition: 'fade'
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <AlertProvider template={AlertTemplate} {...options}>
          <Router />
        </AlertProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


