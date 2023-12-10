import React, { useContext } from "react";
import './CartCompact.scss';
import { SidebarContext } from '../../utils/SidebarContext';
import { CartContext } from "../../utils/CartContext";
import { Link } from "react-router-dom";
const CartCompact = () => {
  const { handleClose } = useContext(SidebarContext);
  const {isOpen, cartItems, formatPrice } = useContext(CartContext);
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "300%",
        backgroundColor: "rgba(0, 0, 0, 0.35)" /* Màu đen với độ mờ là 0.5 */,
        zIndex: "10" /* Đảm bảo overlay hiển thị trên phần tử khác */,
      }}
      onClick={handleClose}
      className="overlay"
    >
      <div className={`cart ${isOpen ? "open" : ""}`}>
        <h3>Giỏ hàng</h3>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.images} alt="" />
                <div style={{ width: "200px" }}>
                  <h2>{item.name}</h2>
                  <i>{item.description}</i>
                </div>
                <h1>
                  <i>{formatPrice(item.price)} vnđ</i>
                </h1>
                <button className="cart-remove">
                  <i
                    className="fa-solid fa-trash fa-2xl"
                    style={{ color: "#f7f7f7" }}
                  ></i>
                </button>{" "}
              </li>
            ))}
          </ul>
        )}
        <div className="cart__items">{/* Hiển thị các items */}</div>
        <div className="cart__total">
          <p>Tổng tiền: </p>
          <p>$99</p>
        </div>
        <Link to="shop">
          <button className="cart__checkout-btn">Thanh toán</button>
        </Link>
        tới giỏ hàng
      </div>
    </div>
  );
}

export default CartCompact
