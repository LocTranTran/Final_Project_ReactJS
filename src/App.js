import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Products from "./pages/Products";
import { CartProvider } from "./utils/CartContext";
import { LoginProvider } from "./utils/LoginContext";
import Router from "./utils/Router";

const App = () => {
  return (
    <CartProvider>
      <LoginProvider>
      <Header />
        <Router/>
      <Footer />
      </LoginProvider>
    </CartProvider>
  );
};

export default App;
