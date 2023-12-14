import React, { useState } from "react";
import ProvinceSelect from "./ProvinceSelect ";
import "./Checkout.scss";

function Checkout() {
 const [paymentMethod, setPaymentMethod] = useState("");
//  const [discountCode, setDiscountCode] = useState("");
 const [isOrderPlaced, setIsOrderPlaced] = useState(false);

 const handlePlaceOrder = () => {
   // Xử lý logic đặt hàng ở đây

   // Sau khi đặt hàng thành công, đặt isOrderPlaced thành true
   setIsOrderPlaced(true);

   // Reset trạng thái đặt hàng sau một khoảng thời gian (nếu cần)
   setTimeout(() => {
     setIsOrderPlaced(false);
   }, 1000); // Thời gian (ms) để hiển thị thông báo trước khi reset
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
      {isOrderPlaced && (
        <div className="success-message">Đặt hàng thành công!</div>
      )}
      <div onClick={handlePlaceOrder}  className="oder">
        Đặt Hàng
      </div>
    </div>
  );
}

export default Checkout;
