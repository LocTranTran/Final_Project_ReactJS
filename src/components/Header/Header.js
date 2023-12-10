import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { CartContext } from "../../utils/CartContext";
import { LoginContext } from "../../utils/LoginContext";
import { SidebarContext } from "../../utils/SidebarContext";
import CartCompact from "../../pages/Cart/CartCompact";
const Header = () => {
  const { handleSearchInputChange, handleSearchButtonClick, isLoading } =
    useContext(CartContext);
  const {
    loggedIn,
    handleLogout,
    username,
    handleUserClick,
    showLogout,
  } = useContext(LoginContext);
  const { handleOpen, isOpen } = useContext(SidebarContext);

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
                {loggedIn ? (
                  <div className="header__top-auth">
                    <Link
                      className="header__top-sign justify-content-between header__top-sign-in d-flex align-items-center "
                      style={{
                        fontSize: "1.5rem",
                        fontFamily: "cursive",
                        width: "50px",
                      }}
                      onClick={handleUserClick}
                    >
                      <b>{username}</b>
                      <i className="fa-solid fa-caret-down "></i>
                    </Link>
                    {showLogout && (
                      <div
                        className="d-flex flex-column justify-content-center"
                        onClick={handleLogout}
                        style={{
                          position: "absolute",
                          top: "70px",
                          fontSize: "1.3rem",
                          boxShadow: "0px 0px 2px gray",
                          height: "50px",
                          color: "black",
                          backgroundColor: "white",
                          padding: "5px",
                        }}
                      >
                        <Link
                          to=""
                          className="header__top-logout d-flex align-items-center "
                        >
                          Hồ sơ
                        </Link>
                        <Link
                          to="login"
                          className="header__top-logout d-flex align-items-center "
                          onClick={handleLogout}
                        >
                          Đăng xuất
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="header__top-auth">
                    <Link
                      to="login"
                      onClick={handleUserClick}
                      className="header__top-sign header__top-sign-in"
                    >
                      Đăng Nhập
                    </Link>
                    <div className="header__top-auth-separate">/</div>
                    <Link
                      to="register "
                      className="header__top-sign header__top-sign-up"
                    >
                      Đăng Ký
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
                  <i style={{color:'green',fontSize:'3rem'}} className="fa-solid fa-basket-shopping"></i>
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
