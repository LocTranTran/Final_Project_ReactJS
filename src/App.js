import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/products/Header/Header";
import Footer from "./components/products/Footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { CartProvider } from "./utils/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Home   />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
