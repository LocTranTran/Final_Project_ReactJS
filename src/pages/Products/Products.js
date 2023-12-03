import React from "react";
import ProductList from "./ProductList";
import Category from "./Category";
import './DisBanner'
import DisBanner from "./DisBanner";
const Products = () => {
  return (
    <>
      <DisBanner/>
    <div className="d-flex justify-content-center ">
      <Category />
      <ProductList numItem={10}/>
    </div>
    </>
  );
};

export default Products;
