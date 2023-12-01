import React from 'react'
import './CartCompact.scss';
const CartCompact = () => {
  return (
    <div className="cart">
      <h3>Giỏ hàng</h3>
      
      <div className="cart__items">
        {/* Hiển thị các items */}
      </div>

      <div className="cart__total">
        <p>Tổng tiền: </p> 
        <p>$99</p>
      </div>

      <button className="cart__checkout-btn">
        Thanh toán
      </button>
    </div>
  )
}

export default CartCompact
