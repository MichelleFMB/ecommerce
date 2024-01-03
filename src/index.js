import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShopContextProvider from './data/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
);