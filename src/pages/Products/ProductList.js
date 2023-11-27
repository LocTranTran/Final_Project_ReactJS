import React, { useContext } from "react";
import ProductsItems from "./ProductsItems";
import { CartContext } from "../../utils/CartContext";

const ProductList = () => {
  const { displayedItems } = useContext(CartContext);
  return (
    <div className="container-xxl ">
      <h2 style={{ position: "relative", right: "35%", padding: "20px" }}>
        Danh sách sản phẩm
      </h2>
      <ul className="container-xxl d-flex flex-wrap  gap-xxl-2">
        {displayedItems.map((product) => (
          <ProductsItems key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
