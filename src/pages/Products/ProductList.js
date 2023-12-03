import React, { useContext } from "react";
import ProductsItems from "./ProductsItems";
import './Products.scss'
import '../../pages/Style.scss'
import { CartContext } from "../../utils/CartContext";

const ProductList = ({numItem}) => {
  const { displayedItems } = useContext(CartContext);
   const displayedItemsSlice = displayedItems.slice(0, numItem);
  return (
    <div className="products">
      <div className="container">
        <h2 className="product__title">Danh sách sản phẩm</h2>
        <ul className="products__list">
          {displayedItemsSlice.map((product) => (
            <ProductsItems key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
