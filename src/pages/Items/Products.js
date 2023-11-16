// Products.js

import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductsItems from "./ProductsItems";

const Products = () => {
  // Khai báo state lưu dữ liệu sản phẩm
  const [products, setProducts] = useState([]);

  // Gọi API lấy dữ liệu sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // Lưu dữ liệu vào state
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>

      {/* Render danh sách sản phẩm */}
      <ul className=" container-xxl d-flex flex-wrap border justify-content-between" >
        {products.map((product) => (
          <ProductsItems key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
