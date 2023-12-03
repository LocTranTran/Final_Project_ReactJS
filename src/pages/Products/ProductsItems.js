import React, { memo } from 'react'
import './Products.scss'
import '../../pages/Style.scss'
const ProductsItems = ({ product }) => {
  return (
    <div key={product.id} className="products__items">
      <figure className="products__items--img">
        <img src={product.images} alt="" />
      </figure>
        <div className="products__items-info">
          <h4 className="products__items-name">{product.name}</h4>
          <span className="products__items-price">{product.price} VND</span>
          {/* <span className="title--info-des">{product.description}</span> */}
        </div>
        <div>
          {/* <button className="title--btn">
            <i className="fa-solid fa-basket-shopping fa-xl"></i>
          </button> */}
        </div>
    </div>
  );
}

//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(ProductsItems)
