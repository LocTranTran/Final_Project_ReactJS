import React, { useContext, useState } from "react";
import ProductsItems from "./ProductsItems";
import "./Products.scss";
import "../../pages/Style.scss";
import { CartContext } from "../../utils/CartContext";
import Loading from "../../utils/Loading";

const ProductHome = ({nums}) => {
    const { isLoading, displayedItems } = useContext(CartContext);
    const displayedItemsSlice = displayedItems.slice(0, nums);
  // Sliding Product
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollNext = () => {
    if(scrollPosition < (nums - 5) ) {
        setScrollPosition(scrollPosition + 1);
        console.log(scrollPosition);
    }
  };

  const scrollPrevious = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    }
  };
    return (
      <>
        <div className="container">
        <h1 className="product__title">
          Danh sách sản phẩm
        </h1>
        <div className="products__button-slide-gr">
            <button className="products__button-slide-prev" onClick={scrollPrevious}>
            <svg 
                width="17" 
                height="15" 
                viewBox="0 0 17 15" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M16 7.50055H1" 
                    stroke='currentColor'
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
                <path 
                    d="M9.9502 1.47552L16.0002 7.49953L9.9502 13.5245" 
                    stroke='currentColor'
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
            </svg>
            </button>
            <button className="products__button-slide-next" onClick={scrollNext}>
            <svg 
                width="17" 
                height="15" 
                viewBox="0 0 17 15" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M16 7.50055H1" 
                    stroke='currentColor'
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
                <path 
                    d="M9.9502 1.47552L16.0002 7.49953L9.9502 13.5245" 
                    stroke='currentColor'
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
            </svg>
            </button>
        </div>
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
            <div className="products__list-container">
                <ul className="products__list-home" style={{ transform: `translateX(-${scrollPosition * 264}px)` }}>
                  {displayedItemsSlice.map((product) => (
                    <ProductsItems key={product.id} product={product} />
                  ))}
                </ul>
            </div>
          )}
        </div>
        <Loading isLoading={isLoading} />
      </>
    );
  };
  export default ProductHome;