import React, { useContext } from "react";
import ProductsItems from "./ProductsItems";
import "./Products.scss";
import "../../pages/Style.scss";
import { CartContext } from "../../utils/CartContext";
import Loading from "../../utils/Loading";

const ProductList = ({ numItem }) => {
  const { isLoading, displayedItems } = useContext(CartContext);
  const displayedItemsSlice = displayedItems.slice(0, numItem);

  return (
    <>
      <h1 style={{ fontSize: "3rem", padding: "10px 0" }}>
        Danh sách sản phẩm
      </h1>
      <div className="container">
        {displayedItemsSlice.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
            <img
              style={{ width: "300px", height: "200px", marginBottom: "100px" }}
              src="https://eherbalmarket.vn/assets/images/no-cart.png"
              alt="lỗi"
            />
          </div>
        ) : (
            <ul className="products__list">
              {displayedItemsSlice.map((product) => (
                <ProductsItems key={product.id} product={product} />
              ))}
            </ul>
        )}
      </div>
      <Loading isLoading={isLoading} />
    </>
  );
};

export default ProductList;