import React, { useState } from "react";

const ProvinceSelect = () => {
  const [province, setProvince] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    let updatedDistricts = [];

    // Lấy danh sách huyện tương ứng với tỉnh thành được chọn
    if (selectedProvince === "hn") {
      updatedDistricts = [
        "Ba Đình",
        "Hoàn Kiếm",
        "Hai Bà Trưng",
        "Đống Đa",
        "Cầu Giấy",
      ];
    } else if (selectedProvince === "hcm") {
      updatedDistricts = ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5"];
    } else if (selectedProvince === "dn") {
      updatedDistricts = [
        "Hải Châu",
        "Thanh Khê",
        "Sơn Trà",
        "Ngũ Hành Sơn",
        "Liên Chiểu",
      ];
    } else if (selectedProvince === "hp") {
      updatedDistricts = [
        "Hồng Bàng",
        "Lê Chân",
        "Ngô Quyền",
        "Kiến An",
        "Hải An",
      ];
    } else if (selectedProvince === "ct") {
      updatedDistricts = [
        "Thủ Đức",
        "Gò Vấp",
        "Bình Thạnh",
        "Tân Bình",
        "Tân Phú",
      ];
    } else if (selectedProvince === "vt") {
      updatedDistricts = [
        "Bà Rịa",
        "Vũng Tàu",
        "Long Điền",
        "Xuyên Mộc",
        "Châu Đức",
      ];
    }
    // Thêm các tỉnh thành khác tại đây

    setProvince(selectedProvince);
    setDistricts(updatedDistricts);
  };

  return (
    <div>
      <select name="province" value={province} onChange={handleProvinceChange}>
        <option value="">Chọn tỉnh thành</option>
        <option value="hn">Hà Nội</option>
        <option value="hcm">Hồ Chí Minh</option>
        <option value="dn">Đà Nẵng</option>
        <option value="hp">Hải Phòng</option>
        <option value="ct">Cần Thơ</option>
        <option value="vt">Vũng Tàu</option>
        {/* Thêm các tỉnh thành khác tại đây */}
      </select>

      <select name="district">
        <option value="">Chọn huyện</option>
        {districts.map((district, index) => (
          <option key={index} value={district}>
            {district}
            </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceSelect;
