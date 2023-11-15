import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/products/Header/Header";
import Footer from "./components/products/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Items/Products";
import { CartProvider } from "./utils/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <div className="container-xxl text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;