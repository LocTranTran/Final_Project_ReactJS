import React from "react";
import ProductList from "./ProductList";
import Category from "./Category";

const Products = () => {
  return (
    <div className="d-flex justify-content-center ">
      <Category />
      <ProductList/>
    </div>
  );
};

export default Products;
