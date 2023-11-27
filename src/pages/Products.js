import React from "react";
import ProductList from "./Products/ProductList";

const Products = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <ProductList numItem={18}  />
      </div>
    </div>
  );
};

export default Products;
