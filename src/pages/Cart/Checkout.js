import React, { useState } from "react";
import ProvinceSelect from "./ProvinceSelect ";

function Checkout() {
  const [city, setCity] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmitOrder = () => {
    // Xử lý logic đặt hàng ở đây, ví dụ: gửi thông tin đặt hàng đến máy chủ

    // Đặt lại giá trị của state và hiển thị thông báo đã đặt hàng thành công
    setCity("");
    setOrderSubmitted(true);
  };

  return (
    <div>
      <h2>Trang đặt hàng</h2>
      {/* Hiển thị danh sách sản phẩm trong giỏ hàng */}
      <ul>
        <li>Sản phẩm 1</li>
        <li>Sản phẩm 2</li>
        <li>Sản phẩm 3</li>
      </ul>
      {/* Phần chọn thành phố */}
      {/* <label>
        Thành phố:
        <select value={city} onChange={handleCityChange}>
          <option value="">Chọn thành phố</option>
          <option value="Hanoi">Hà Nội</option>
          <option value="HoChiMinh">Hồ Chí Minh</option>
          <option value="Danang">Đà Nẵng</option>
        </select>
      </label> */}
        <ProvinceSelect/>
      {/* Nút "Đặt hàng" */}
      <button onClick={handleSubmitOrder}>Đặt hàng</button>
      {/* Hiển thị thông báo đã đặt hàng thành công */}
      {orderSubmitted && <p>Đặt hàng thành công!</p>}
    </div>
  );
}

export default Checkout;
