import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/products/Header/Header";
import Footer from "./components/products/Footer/Footer";
// import Products from "./pages/Products";
import { CartProvider } from "./utils/CartContext";
import Router from "./utils/Router";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
      <Header />
        <Router/>
      <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
