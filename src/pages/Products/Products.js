import React from "react";
import ProductList from "./ProductList";
import Category from "./Category";
import './DisBanner'
import DisBanner from "./DisBanner";
const Products = () => {
  return (
    <div className=" flex-column container-xxl d-flex justify-content-center gap-4 ">
      <DisBanner />
      <Category />
      <ProductList />
    </div>
  );
};

export default Products;
