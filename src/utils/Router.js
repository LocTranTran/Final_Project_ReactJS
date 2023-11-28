// Router.js

import { Routes, Route } from "react-router-dom";

// Sửa đường dẫn import Home
import Home from "../pages/Home/Home";

import Products from "../pages/Products/Products";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default Router;
