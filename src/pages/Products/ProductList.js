// Products.js

import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductsItems from "./ProductsItems";
import Category from "./Category";

const ProductList = ({ numItem, filteredProducts }) => {
  // tạo state
  const [products, setProducts] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  // lấy API sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setDisplayedItems(response.data.slice(0, numItem));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [numItem]);

  // Lấy sự kiện giá 
  const handlePriceFilter = (event) => {
    const selectPrice = event.target.value;
    // các điều kiện của giá
    if (selectPrice === 'all') {
      setFilterProduct(products)
    } else if (selectPrice === "< 100k") {
      const filtered = products.filter(product =>
        product.price < 100
      )
      setFilterProduct(filtered);
    } else if (selectPrice === "100 - 200k") {
      const filtered = products.filter(product =>
        product.price >= 100 && product.price <= 200

      )
      setFilterProduct(filtered);

    } else if (selectPrice === "> 300k") {
      const filtered = products.filter(product =>
        product.price >= 300
      )
      setFilterProduct(filtered)
    }
    setDisplayedItems(filterProduct)
  }
  return (
    <div>
      <Category onFilterChange = {handlePriceFilter} />
      <h2 style={{ position: "relative", right: "34%", padding: "20px" }}>
        Danh sách sản phẩm
      </h2>
      <ul className="container-xxl d-flex flex-wrap justify-content-around">
        {displayedItems.map((product) => (
          <ProductsItems key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
