import React from "react";
import { Link } from "react-router-dom";

import Button from "../../common/Button";

import "./Header.scss";
const Header = () => {
  return (
    <>
     <header className="header">
        {/* =================Header__top================ */}
          <div className="header__top">
             <div className="container">
                <div className="header__top-wrap">
                  <div className="header__top-left">
                    <img src="assets\image\location.svg" alt="" />
                    <span className="header__top-address">Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                  </div>
                  <div className="header__top-right">
                    <div className="header__top-language-wrap">
                      <span className="header__top-language">
                      Eng
                        <img src="assets\image\arrow-icon.svg" alt="icon" />
                      </span>
                      <span className="header__top-currency">
                      USD
                        <img src="assets\image\arrow-icon.svg" alt="icon" />
                      </span>
                    </div>
                    <div className="header__top-right-separate"></div>
                    <div className="header__top-auth">
                      <Link to="#" className="header__top-sign header__top-sign-in">Sign In</Link>
                      <div className="header__top-auth-separate">/</div>
                      <Link to="#" className="header__top-sign header__top-sign-up">Sign Up</Link>
                    </div>
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
                      <label htmlFor="header__search" className="header__midle-search-icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </label>
                      <input type="search" name="search" placeholder="Search" id="header__search" className="header__midle-search-input"/>
                    </div>
                    <button type='button' className="header__midle-button">Search</button>
                  </form>
                </div>
                <div className="header__midle-cart">
                  <figure className="header__midle-cart-icon">
                    <img src="./assets/image/cart.svg" alt="" />
                    <span className="header__middle-cart-count">0</span>
                  </figure>
                  <div className="header__midle-cart-info">
                    <span className="header__midle-cart-title">Shopping cart:</span>
                    <span className="header__midle-cart-price">$57.00</span>
                  </div>
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
                      <Link to="/" className="header__nav-link header__nav-link--active">Home</Link>
                    </li>
                    <li>
                      <Link to="/products" className="header__nav-link">Shop</Link>
                    </li>
                    <li>
                      <Link className="header__nav-link">Pages</Link>
                    </li>
                    <li>
                      <Link className="header__nav-link">Blog</Link>
                    </li>
                    <li>
                      <Link className="header__nav-link">About Us</Link>
                    </li>
                    <li>
                      <Link className="header__nav-link">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
                <a href="#!" className="header__bottom-phone">
                  <i class="fa-solid fa-phone-volume"></i>
                  <span className="header__bottom-phone-number">(219) 555-0114</span>
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
