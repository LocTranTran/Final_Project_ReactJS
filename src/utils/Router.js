// Router.js

import { Routes, Route } from "react-router-dom";

// Sửa đường dẫn import Home
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register ";
import Checkout from "../pages/Oder/Checkout";
import Shop from "../pages/Cart/Shop";
import UserProfile from "../components/UserProflle/UseProfile";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/shop/checkouts" element={<Checkout/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/profile" element={<UserProfile/>} />
    </Routes>
  );
}

export default Router;
