import React from "react";
import ProductList from "./Products/ProductList";
import Category from "./Products/Category";

const Products = () => {

  return (
    <div className="d-flex">
      <Category/>
      <ProductList />
    </div>
  );
};

export default Products;
