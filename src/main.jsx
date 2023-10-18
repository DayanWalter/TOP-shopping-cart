import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import Home from './components/Home.jsx';
import Site from './components/Site.jsx';
import AddToCartButton from './components/AddToCartButton.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
