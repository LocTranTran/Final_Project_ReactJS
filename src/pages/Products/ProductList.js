import React, { useContext } from "react";
import ProductsItems from "./ProductsItems";
import './Products.scss'
import '../../pages/Style.scss'
import { CartContext } from "../../utils/CartContext";
import Loading from "../../utils/Loading";
const ProductList = ({numItem}) => {
  const { isLoading ,displayedItems } = useContext(CartContext);
   const displayedItemsSlice = displayedItems.slice(0, numItem);
  return (
    <div className="d-flex align-items-center  flex-column  col-7 gap-5 ">
<h1 style={{ fontSize: "3rem", padding: "10px 0" }}>
        Danh sách sản phẩm
      </h1>
      {displayedItemsSlice.length === 0 ? (
        <img src='https://eherbalmarket.vn/assets/images/no-cart.png' alt='lỗi'></img>
      ):(
      <ul className="d-flex flex-wrap gap-5">
        {displayedItemsSlice.map((product) => (
          <ProductsItems key={product.id} product={product} />
        ))}
      </ul>

      )}
      <div>
        {isLoading ? (
          // Biểu tượng SVG trong khi đợi      
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
    </div>
  );
};

export default ProductList;