import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import Home from './components/Home.jsx';
import Site from './components/Site.jsx';
import AddToCartButton from './components/AddToCartButton.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Site />
    {/* <AddToCartButton /> */}
    {/* <Home /> */}
  </React.StrictMode>
);
