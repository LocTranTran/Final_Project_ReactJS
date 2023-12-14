import React, { useState, useContext } from "react";
import './ProductInfo.scss';
import { CartContext } from "../../utils/CartContext";
const ProductInfo = ({ product}) => {
    const [showProductInfo, setShowProductInfo] = useState(true);
    const { formatPrice } = useContext(CartContext);
      const handleCloseClick = () => {
        setShowProductInfo(false);
      };
    return (
      <>
        {showProductInfo && (
          <div
            onClick={handleCloseClick}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "380%",
              backgroundColor:
                "rgba(0, 0, 0, 0.35)" /* Màu đen với độ mờ là 0.5 */,
              zIndex: "5" /* Đảm bảo overlay hiển thị trên phần tử khác */,
            }}
            className="overlay"
          >
            <div className="product-info">
              <div className="product-info--image">
                <img src={product.images} alt={product.name} />
              </div>
              <div className="product-info--info">
                <span className="info-name">{product.name}</span>
                <span className="info-price">{formatPrice(product.price)}</span>
                <hr />
                <span className="info-des">{product.description}</span>
                <span className="info-des">
                  Loại sản phẩm : {product.category}
                </span>
                <hr />
                {/* <div className="info-cart">
                  <span className="info-plus">
                    <button className="plus-input">-</button>
                    <span className="plus-input">0</span>
                    <button className="plus-input">+</button>
                  </span>
                  <button className="info-btn">Thêm vào giỏ hàng</button>`
                </div> */}
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default ProductInfo;