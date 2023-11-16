import React,{memo} from 'react'
import './ProductsItems.scss'
const ProductsItems = ({product}) => {
  return (
    <div className="product__item border">
      <div className="products__item--img">
        <img src={product.image} key={product.id} alt="" />
      </div>
      <div className="products__item--title border">
        <div className="title--info d-flex ">
          <span className="title--info-name">{product.title}</span>
          <span className="title--info-price">{product.price}</span>
          <span className="title--info-des">{product.des}</span>
        </div>
        <div>
          <button className="title--btn">
            <i class="fa-solid fa-basket-shopping" />
          </button>
        </div>
      </div>
    </div>
  );
}

//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(ProductsItems)
