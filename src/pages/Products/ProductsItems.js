import React, { memo } from 'react'
import './ProductsItems.scss'
const ProductsItems = ({ product }) => {
  return (
    <div key={product.id} className="product__item border">
      <div className="products__item--img">
        <img src={product.images} alt="" />
      </div>
      <div className="products__item--title ">
        <div className="title--info d-flex ">
          <span className="title--info-name">{product.name}</span>
          <span className="title--info-price">{product.price} VND</span>
          <span className="title--info-des">{product.description}</span>
        </div>
        <div>
          <button className="title--btn">
            <i className="fa-solid fa-basket-shopping fa-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(ProductsItems)
