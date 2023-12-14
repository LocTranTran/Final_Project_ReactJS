import React, { useContext, useState} from "react";
import "./Shop.scss";
import { CartContext } from "../../utils/CartContext";
import BannerInfo from "../../components/BannerInfo";
import { Link } from "react-router-dom";
import Checkout from "../Oder/Checkout";

const Shop = () => {
  const {
    cartItems,
    subTotal,
    handleRemoveItem,
    formatPrice,
    handlePlus,
    handleMinus,
  } = useContext(CartContext);
  const ship = subTotal / 50;
  const total = ship + subTotal;

  const [showCheckout, setShowcheckout] = useState(false);
  const handleShowCheckout = () => {
    setShowcheckout(true)
  }
  return (
    <>
      <BannerInfo page={"Giỏ Hàng"} />
      <div className=" shopping d-flex flex-column align-items-center gap-4  ">
        <h1>Giỏ Hàng </h1>

        <div className=" container-xxl   d-flex justify-content-around ">
          <div className="shopping-cart border">
            <div className="shopping-cart-title d-flex justify-content-around border">
              <span>Sản phẩm</span>
              <span>Giá</span>
              <span>Số lượng</span>
              <span>Tổng</span>
            </div>
            {cartItems.length === 0 ? (
              <div
                className="d-flex flex-column align-items-center justify-center"
                style={{
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Link to="/products">
                  <img
                    style={{
                      width: "200px",
                      height: "100px",
                    }}
                    src="https://eherbalmarket.vn/assets/images/no-cart.png"
                    alt="lỗi"
                  />
                </Link>
              </div>
            ) : (
              <div className="shopping-cart-items">
                {cartItems.map((item) => (
                  <div className="shopping-cart-items-item" key={item.id}>
                    <div
                      className="d-flex align-items-center gap-5"
                      style={{ width: "240px" }}
                    >
                      <img
                        className="shopping-cart-items-img"
                        src={item.images}
                        alt=""
                      />
                      <div>
                        <h2 style={{ width: "180px", fontSize: "1.5rem" }}>
                          {item.name}
                        </h2>
                      </div>
                    </div>
                    <h1 style={{ width: "100px", fontSize: "1.5rem" }}>
                      <i>{formatPrice(item.price)}</i>
                    </h1>
                    <div className="quantity">
                      <span
                        onClick={() => handleMinus(item)}
                        className="quantity-btn"
                      >
                        -
                      </span>
                      <span className="quantity-btn">{item.quantity}</span>
                      <span
                        onClick={() => handlePlus(item)}
                        className="quantity-btn"
                      >
                        +
                      </span>
                    </div>
                    <h1 style={{ width: "40px" }}>
                      <i>{formatPrice(item.price * item.quantity)}</i>
                    </h1>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="cart-remove"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="shopping-total d-flex border ">
            <h1>Tổng Số Giỏ Hàng</h1>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Tổng Phụ </span>
              <span>{formatPrice(subTotal)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Phí vận huyển </span>
              <span>{formatPrice(ship)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Tổng Cộng : </span>
              <span>{formatPrice(total)}</span>
            </div>
            <hr />
            {/* <Link to="checkouts"> */}
              <button onClick={handleShowCheckout} className="order-button">Đặt hàng ngay</button>
              {showCheckout &&<div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor:
                "rgba(0, 0, 0, 0.35)" /* Màu đen với độ mờ là 0.5 */,
              zIndex: "5" /* Đảm bảo overlay hiển thị trên phần tử khác */,
            }}
            className="overlay"
          >
           <Checkout/>   
          </div>
            }
              
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
