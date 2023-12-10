// Router.js

import { Routes, Route } from "react-router-dom";

// Sửa đường dẫn import Home
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register ";
import Checkout from "../pages/Cart/Checkout";
import Shop from "../pages/Cart/Shop";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/checkouts" element={<Checkout/>} />
      <Route path="/shop" element={<Shop/>} />
    </Routes>
  );
}

export default Router;
