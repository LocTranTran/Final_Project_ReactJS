import React, { useContext } from "react";
import ProductsItems from "./ProductsItems";
import { CartContext } from "../../utils/CartContext";

const ProductList = ({numItem}) => {
  const { displayedItems } = useContext(CartContext);
   const displayedItemsSlice = displayedItems.slice(0, numItem);
  return (
    <div className="d-flex justify-content-center align-items-center  flex-column  col-7 gap-5 ">
      <h1 style={{ fontSize: "3rem" }}>Danh sách sản phẩm</h1>
      <ul className="d-flex justify-content-around  flex-wrap gap-1">
        {displayedItemsSlice.map((product) => (
          <ProductsItems key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
