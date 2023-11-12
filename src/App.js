import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/products/Header/Header';
import Footer from './components/products/Footer/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;