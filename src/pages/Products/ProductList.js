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
    <div className="">
      <h1 style={{ fontSize: "3rem" }}>Danh sách sản phẩm</h1>
      {displayedItemsSlice.length === 0 ? (
        <img
          src="https://eherbalmarket.vn/assets/images/no-cart.png"
          alt="lỗi"
        />
      ) : (
        <ul className="d-flex flex-wrap gap-5">
          {/* {displayedItemsSlice.map((product) => (
            <ProductsItems key={product.id} product={product} />
          ))} */}
        </ul>
      )}
      {isLoading ? (
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
        <div>
          <section className="py-16">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
              max-w-sm mx-auto md:max-w-none md:mx-0">
              {displayedItemsSlice.map((product) => {
              return(
                 <ProductsItems key={product.id} product={product} />
              )
            })}
              </div>
           

            </div>
           
          </section>
             
       
          <Loading isLoading={isLoading} />
          </div>
      )}
    </div>
  );
};

export default ProductList;