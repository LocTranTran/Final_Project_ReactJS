import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { CartContext } from "../../utils/CartContext";
import { LoginContext } from "../../utils/LoginContext";
import { SidebarContext } from "../../utils/SidebarContext";
import CartCompact from "../../pages/Cart/CartCompact";
import { useDispatch, useSelector } from "react-redux";
import { clearUsername, logout } from "../Redux/actions";
const Header = () => {
  const { handleSearchInputChange, handleSearchButtonClick, isLoading } =
    useContext(CartContext);
  const {
    // loggedIn,
    handleLogout,
    // username,

    // handleUserClick,
    // showLogout,
  } = useContext(LoginContext);
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const { handleOpen, isOpen } = useContext(SidebarContext);
  // console.log(isOpen);
  const [showHaha, setShowHaha] = useState(false);

  const handleMouseEnter = () => {
    setShowHaha(!showHaha);
  };
  const handleLogouts = () => {
    handleLogout();
  };

  // const [cartTransform, setCartTransform] = useState('translateX(0%)');
  return (
    <>
      <header className="header">
        {/* =================Header__top================ */}
        <div className="header__top">
          <div className="container">
            <div className="header__top-wrap">
              <div className="header__top-left">
                <img src="assets\image\location.svg" alt="" />
                <span className="header__top-address">
                  Hải Châu, Đà Nẵng, Việt Nam
                </span>
              </div>
              <div className="header__top-right">
                <div className="header__top-language-wrap">
                  <span className="header__top-language">
                    Tiếng Việt
                    <img src="assets\image\arrow-icon.svg" alt="icon" />
                  </span>
                  <span className="header__top-currency">
                    VND
                    <img src="assets\image\arrow-icon.svg" alt="icon" />
                  </span>
                </div>
                <div className="header__top-right-separate"></div>
                {loggedInUser ? (
                  <div className="header__top-username">
                    <b onClick={handleMouseEnter}>{loggedInUser}</b>
                    {showHaha && (
                      <div
                        style={{
                          position: "absolute",
                          top: "80px",
                          width: "80px",
                          height: "50px",
                          backgroundColor: "white",
                          boxShadow: "0 0 3px black",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          alignItems: "start",
                        }}
                      >
                        <button>
                          <Link className="link-black" to="/profile">
                            <span>Hồ sơ</span>
                            <i className="fa-solid fa-user"></i>
                          </Link>
                        </button>
                        <button onClick={handleLogouts}>
                          Đăng xuất
                          <i className="fa-solid fa-right-from-bracket"></i>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    style={{ color: "black" }}
                    className="header__top-login-register"
                  >
                    <Link to="/login" className="link-black">
                      Đăng nhập
                    </Link>
                    /
                    <Link to="/register" className="link-black">
                      Đăng ký
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* ===================== Header__mid =================*/}
        <div className="header__midle">
          <div className="container">
            <div className="header__midle-wrap">
              <figure className="header__midle-logo">
                <img src="./assets/image/Logo.svg" alt="" />
                <span className="header__midle-logo-name">Ecobazar</span>
              </figure>
              <div className="header__midle-search">
                <form className="header__midle-search-form">
                  <div className="header__midle-search-wrap">
                    <label
                      htmlFor="header__search"
                      className="header__midle-search-icon"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </label>
                    <input
                      onChange={handleSearchInputChange}
                      type="search"
                      name="Tìm Kiếm sản phẩm"
                      placeholder="Search"
                      id="header__search"
                      className="header__midle-search-input"
                    />
                  </div>
                  <button
                    onClick={handleSearchButtonClick}
                    disabled={isLoading}
                    type="button"
                    className="header__midle-button"
                  >
                    <Link to="/products" style={{ color: "white" }}>
                      Tìm Kiếm
                    </Link>
                  </button>
                </form>
              </div>
              {/* giỏ hàng */}
              <div>
                <div onClick={handleOpen}>
                  <i
                    style={{ color: "green", fontSize: "3rem" }}
                    className="fa-solid fa-basket-shopping"
                  ></i>
                </div>
                {isOpen && <CartCompact />}
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <div className="header__bottom-wrap">
              <nav className="header__nav-bar">
                <ul className="header__nav-list">
                  <li>
                    <Link
                      to="/"
                      className="header__nav-link header__nav-link--active"
                    >
                      Trang Chủ
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="header__nav-link">
                      Sản Phẩm
                    </Link>
                  </li>
                  <li>
                    <Link className="header__nav-link">Trang</Link>
                  </li>
                  <li>
                    <Link className="header__nav-link">Trợ Giúp</Link>
                  </li>
                  {/* <li>
                      <Link className="header__nav-link">About Us</Link>
                    </li>
                    <li>
                      <Link className="header__nav-link">Contact Us</Link>
                    </li> */}
                </ul>
              </nav>
              <a href="#!" className="header__bottom-phone">
                <i className="fa-solid fa-phone-volume"></i>
                <span className="header__bottom-phone-number">
                  (+84) 555-0114
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default Header;
