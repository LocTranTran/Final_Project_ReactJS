import React from "react";
import { Link } from "react-router-dom";

import Button from "../../common/Button";

import "./Header.scss";
const Header = () => {
  return (
    <>
      <div className="header container-fluid   ">
        <div className="container-xxl align-items-center text-center bg-light  ">
          <div
            className="row d-flex align-items-center text-center justify-content-between"
            style={{ height: "42px" }}
          >
            <div className="col-3">
              <i
                className="fa-solid fa-location-dot fa-xl"
                style={{ color: " #898a8b" }}
              />
              <span> Hải Châu ,Đà Nẵng ,Việt Nam</span>
            </div>
            <div className="col-5 d-flex justify-content-between  ">
              <div className="col-4 ">
                <div className="language-container">
                  <span className="current-language">Tiếng Việt </span>
                  <i className="fa-solid fa-chevron-down fa-sm"></i>
                </div>
              </div>
              |
              <div className="col-8 ">
                <span>Đăng Nhập </span>/<span> Đăng Ký</span>
              </div>
            </div>
          </div>
          <div
            className="row d-flex align-items-center text-center justify-content-around "
            style={{ height: "93px" }}
          >
            <div className="col-2">
              <img
                src="https://suno.vn/blog/wp-content/uploads/2014/12/nike-lich-su-thiet-ke-logo.jpg"
                alt="logo"
                height={"50px"}
              />
            </div>
            <div className="col-5 d-flex ">
              <input
                type="search"
                placeholder="Tìm Kiếm Sản Phẩm "
                style={{ width: "500px" }}
              />
              <Button
                title={
                  <i
                    className="fa-solid fa-magnifying-glass fa-xl"
                    style={{ color: "black" }}
                  />
                }
              />
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center ">
              <div className="col-2  ">
                <i
                  className="fa-solid fa-store fa-2xl"
                  style={{ color: "#030303" }}
                ></i>
              </div>
              <div className="col-6">
                <span>
                  <b>Giỏ Hàng</b>
                </span>
                <br />
                <span>
                  <i>000000 VNĐ</i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid align-items-center d-flex justify-content-center "
          style={{ backgroundColor: "black", height: "60px" }}
        >
          <nav
            className="row container-xxl align-items-center text-center justify-content-around "
            style={{ color: "white", height: "60px" }}
          >
            <div
              className="col-6 d-flex align-items-center justify-content-around "
              style={{ fontSize: "1.2rem", color: "#fff" }}
            >
              {/* link  */}
              <Link to="/">
                <span>Trang Chủ</span>
              </Link>
              <Link to="/products">
                <span>Sản Phẩm</span>
              </Link>
          
            </div>
            <div className="col-4 form-control-lg ">
              <i className="fa-solid fa-phone"></i> 0789006730
            </div>
          </nav>
        </div>
      </div>
      <div style={{ width: "100px", height: "200px" }}></div>
    </>
  );
};
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default Header;
