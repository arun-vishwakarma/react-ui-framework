/**
 * Application entry point
 * App component and Redux store with persistor
 * BrowserRouter
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import {store, persistor } from './app/store';
//import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/es/integration/react';

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter> 
      <PersistGate persistor={persistor}>   
        <App />   
      </PersistGate>     
    </BrowserRouter>
  </Provider> ,
  document.getElementById('root')
);
