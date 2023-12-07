import React, { useContext } from "react";
import './CartCompact.scss';
import { SidebarContext } from '../../utils/SidebarContext';
const CartCompact = () => {
  const { handleClose } = useContext(SidebarContext);
  return (
    <div className="cart">
      <button onClick={handleClose}>Đóng</button>
      <h3>Giỏ hàng</h3>
      <div className="cart__items">{/* Hiển thị các items */}</div>
      <div className="cart__total">
        <p>Tổng tiền: </p>
        <p>$99</p>
      </div>
      <button className="cart__checkout-btn">Thanh toán</button>
      tới giỏ hàng
    </div>
  );
}

export default CartCompact
