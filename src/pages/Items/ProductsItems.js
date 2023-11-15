import React,{memo} from 'react'
import Button from '../../components/common/Button';

const ProductsItems = ({product}) => {
  return (
    <div className="product__item">
      <div className="products__item--img">
        <img src={product.img} alt=""/>
      </div>
      <div className="products__item--title">
        <div className="title--info">
          <span className="title--info-name">{product.name}</span>
          <span className="title--info-price">{product.price}</span>
          <span className="title--info-des">{product.des}</span>
        </div>
        <div className="title--btn">
          <Button title="Buy"/>
        </div>

      </div>
    </div>
  );
}

//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(ProductsItems)
