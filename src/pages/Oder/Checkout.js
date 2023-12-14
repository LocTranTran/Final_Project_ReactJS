import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ProvinceSelect from "./ProvinceSelect ";
import "./Checkout.scss";
import { CartContext } from "../../utils/CartContext";
import { LoginContext } from "../../utils/LoginContext";
function Checkout() {
  const { isLoggedIn } = useContext(LoginContext);
  const {clearCart } = useContext(CartContext); const [paymentMethod, setPaymentMethod] = useState("");
//  const [discountCode, setDiscountCode] = useState("");
const history = useNavigate();
const handlePlaceOrder = () => {
  // Xử lý đặt hàng
  if (isLoggedIn) {
    toast.success("Đặt hàng thành công!", {
      autoClose: 1000, // Thời gian tự động ẩn thông báo (1 giây)
      onClose: () => {
        clearCart();
        history("/"); // Chuyển hướng trở lại trang chủ
      },
    });
  } else {
    toast.error("Bạn chưa đăng nhập !", {
      autoClose: 1000, // Thời gian tự động ẩn thông báo (1 giây)
      onClose: () => {
        history("/login"); // Chuyển hướng trở lại trang chủ
      },
    });
  }
    // Hiển thị thông báo thành công
};
 const handlePaymentMethodChange = (e) => {
   setPaymentMethod(e.target.value);
 };

//  const handleDiscountCodeChange = (e) => {
//    setDiscountCode(e.target.value);
//  };

  return (
    <div className="checkout">
      <h2>Trang đặt hàng</h2>
      <ProvinceSelect />

      <div className="payment-method">
        <label>Phương thức thanh toán:</label>
        <div>
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={handlePaymentMethodChange}
          />
          <label className="d-flex" htmlFor="cash">
            Thanh toán khi nhân hàng
            <img
              src="https://haisanloc.com/files/tin/12/png/huong-dan-mua-hang-va-thanh-toan.png"
              width={"20px"}
              alt=""
            />
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="credit_card"
            name="paymentMethod"
            value="credit_card"
            checked={paymentMethod === "credit_card"}
            onChange={handlePaymentMethodChange}
          />
          <label className="d-flex" htmlFor="credit_card">
            Zalopay{" "}
            <img
              src="https://play-lh.googleusercontent.com/NfFBz1Rxk0nQ7RsOk0kXbi1AEp1ZJ3rzJHbwRlmheZEDPPHh7dscqyxyX-ehxTl7tw=w240-h480-rw"
              width={"20px"}
              alt=""
            />
          </label>
        </div>
      </div>

      {/* <label class="label">
  Mã giảm giá:
  <input class="input-field" type="text" value={discountCode} onChange={handleDiscountCodeChange} />
</label>
<button class="button" onClick={handleApplyDiscount}>Áp dụng mã giảm giá</button> */}
      {/* Các phần tử khác trong trang đặt hàng */}
      <ToastContainer />
      <div onClick={handlePlaceOrder} className="oder">
        Đặt Hàng
      </div>
    </div>
  );
}

export default Checkout;
