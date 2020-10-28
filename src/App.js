import React from 'react';
import './App.css';
import Cart from './features/cart/cart';
import Item from './features/item/item';
import Product from './features/product/product';

function App() {
  
  return (
    <div className="App">
      <Cart/>
      <p>current cart</p>
      <Item/>

      <Product/>
    </div>
  );
}

export default App;
