
import React, { memo, useState } from "react";
import './Products.scss'
import '../../pages/Style.scss'
import ProductInfo from "./ProductInfo";

const formatPrice = (amount) => {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
const ProductsItems = ({ product }) => {
  const [showProductInfo, setShowProductInfo] = useState(false);
  const handleProductClick = () => {
    setShowProductInfo(true);
  }
  const handleCloseClick = () => {
    setShowProductInfo(false);
  }
  return (
    <div key={product.id} onClick={handleProductClick} className="products__items">
      <figure className="products__items-block">
        <img src={product.images} alt="" className="products__items--img" />
      </figure>
        <div className="products__items-info">
          <div className='products__items-info-left'>
            <h4 className="products__items-name">{product.name}</h4>
            <span className="products__items-price">{formatPrice(product.price)}</span>
        </div>
        <button className="product__cart-right-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83333C6.66667 3.99239 8.15905 2.5 10 2.5V2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333"
              stroke="currentcolor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* <img src="./assets/image/cart.svg" alt="" /> */}
          {/* <i class="fa-solid fa-cart-shopping"></i> */}
        </button>
      </div>
      {showProductInfo && (
        <ProductInfo formatPrice={formatPrice} product={product} handleCloseClick={handleCloseClick} />
      )}
    </div>
  );
};
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(ProductsItems)
