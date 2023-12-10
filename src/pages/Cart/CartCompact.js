import React, { useContext, useState } from "react";
import './CartCompact.scss';
import { SidebarContext } from '../../utils/SidebarContext';
import { CartContext } from "../../utils/CartContext";
import { Link } from "react-router-dom";
// import { cssTransition } from "react-toastify";
const CartCompact = () => {
  const { handleClose } = useContext(SidebarContext);
  const { cartItems, formatPrice, setCartItems, removeFromCart } = useContext(CartContext);
  const { handleOpen, isOpen } = useContext(SidebarContext);
  // const [cartTransform, setCartTransform] = useState('translateX(0%)');
  const [quantity, setQuantity] = useState(1); // Khởi tạo state cho số lượng sản phẩm, ở đây mặc định là 1
    // Hàm xử lý khi người dùng nhấn nút tăng số lượng
  const increaseQuantity = (itemId) => {
      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
      setCartItems(updatedCartItems);
  };

    // Tăng số lượng sản phẩm
  const reduceQuantity = (itemId) => {
      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
      setCartItems(updatedCartItems);
  };
  // Xóa sản phẩm
  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };
  // Tổng tiền
  const totalCartPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
    // const totalPrice = quantity * item.price;
    // const openCart = () => {
    //   setCartTransform('translateX(0%)');
    // };
    console.log(isOpen);
  return (
    <>
      <div onClick={handleClose} className="cart__modal"></div>
      <div className='cart' style={{ 
    transform: `translateX(${isOpen ? '0%' : '100%'})`,
    transition: 'transform 0.5s ease-in-out'}}>
        <div className="cart__header">
          {/* <button onClick={handleClose} className="cart__close">Đóng</button> */}
          <h3 className="cart__title">Shopping Card</h3>
        </div>
        {cartItems.length === 0 ? (
          <div className="cart__not-product">
            <img src="./assets/image/no-product.png" alt=""  className="cart__not-product-img"/>
            <p className="cart__not-product-sub">Giỏ hàng của bạn còn trống</p>
          </div>
          
        ) : (
          <ul className="cart__list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart__items">
                <figure className="cart__items-img-block">
                  <img src={item.images} alt="" className="cart__items-img"/>
                </figure>
                <div className="cart__items-body">
                  <h2 className="cart__items-title">{item.name}</h2>
                  {/* <i>{item.description}</i> */}
                  <form action="" className="cart__quanity">
                    <span className="cart__quanity-plus" onClick={() => increaseQuantity(item.id)}>+</span>
                    <span className="cart__quanity-count">{item.quantity}</span>
                    <span className="cart__quanity-minus" onClick={() => reduceQuantity(item.id)}>-</span>
                  </form>
                  
                </div>
                <div className="cart__items-footer">
                  <span className="cart__items-remove" onClick={() => handleRemove(item.id)}>Remove</span>
                  <span className="cart__items-price">
                  {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
                {/* <button className="cart-remove">
                  <i
                    className="fa-solid fa-trash fa-2xl"
                    style={{ color: "#f7f7f7" }}
                  ></i>
                </button>{" "} */}
              </li>
            ))}
          </ul>
        )}
        {/* <div className="cart__items">Hiển thị các items</div> */}
        <div className="cart__footer">
          <div className="cart__total">
            <p>Tổng tiền: </p>
            <p>{formatPrice(totalCartPrice)}</p>
          </div>
          <Link to = '/shop'>
            <button className="cart__checkout-btn">Thanh toán</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartCompact