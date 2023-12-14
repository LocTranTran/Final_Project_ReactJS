import React from "react";
import './Footer.scss'
const Footer = () => {
  return (
    <>
       <footer className="footer">
          <div className="container">
            <div className="footer__list">
              {/* --------------Items-1----------------- */}
              <div className="footer__company">
                <h3 className="footer__title">About Shopery</h3>
                <p className="footer__company-desc">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                <div className="footer__company-contact-gr">
                  <span className="footer__company-contact">(219) 555-0114</span>
                  <span className="footer__company-contact-or">or</span>
                  <span className="footer__company-contact">(219) 555-0114</span>
                </div>
              </div>
               {/* --------------Items-2----------------- */}
              <div className="footer__account">
                <h3 className="footer__title">My Account</h3>
                <ul className="footer__account-list footer__items-list">
                  <li className="footer__account-items">
                    <a href="#!" className="footer__account--link footer__items--link">My Account</a>
                  </li>
                  <li className="footer__account-items">
                    <a href="#!" className="footer__account--link footer__items--link">Order History</a>
                  </li>
                  <li className="footer__account-items">
                    <a href="#!" className="footer__account--link footer__items--link">Wishlist</a>
                  </li>
                  <li className="footer__account-items">
                    <a href="#!" className="footer__account--link footer__items--link">Settings</a>
                  </li>
                </ul>
              </div>
               {/* --------------Items-3----------------- */}
              <div className="footer__help">
                <h3 className="footer__title">Helps</h3>
                <ul className="footer__help-list footer__items-list">
                  <li className="footer__help-items">
                    <a href="#!" className="footer__help--link footer__items--link">Contact</a>
                  </li>
                  <li className="footer__help-items">
                    <a href="#!" className="footer__help--link footer__items--link">Faqs</a>
                  </li>
                  <li className="footer__help-items">
                    <a href="#!" className="footer__help--link footer__items--link">Terms & Condition</a>
                  </li>
                  <li className="footer__help-items">
                    <a href="#!" className="footer__help--link footer__items--link">Privacy Policy</a>
                  </li>
                </ul>
              </div>
               {/* --------------Items-4----------------- */}
              <div className="footer__proxy">
                <h3 className="footer__title">Proxy</h3>
                <ul className="footer__proxy-list footer__items-list">
                  <li className="footer__proxy-items">
                    <a href="#!" className="footer__proxy--link footer__items--link">About</a>
                  </li>
                  <li className="footer__proxy-items">
                    <a href="#!" className="footer__proxy--link footer__items--link">Shop</a>
                  </li>
                  <li className="footer__proxy-items">
                    <a href="#!" className="footer__proxy--link footer__items--link">Product</a>
                  </li>
                  <li className="footer__proxy-items">
                    <a href="#!" className="footer__proxy--link footer__items--link">Products Details</a>
                  </li>
                  <li className="footer__proxy-items">
                    <a href="#!" className="footer__proxy--link footer__items--link">Track Order</a>
                  </li>
                </ul>
              </div>
               {/* --------------Items-5----------------- */}
              <div className="footer__download">
                <h3 className="footer__title">Download our Mobile App</h3>
               <div className="footer__button-gr">
                  <button className="footer__button">
                    <img src="./assets/image/apple.svg" alt="" />
                    <div className="footer__button-info">
                      <span className="footer__button-sub">Download on the</span>
                      <span className="footer__button-label">App Store</span>
                    </div>
                  </button>
                  <button className="footer__button">
                    <img src="./assets/image/gg.svg" alt="" />
                    <div className="footer__button-info">
                      <span className="footer__button-sub">Download on the</span>
                      <span className="footer__button-label">Google play</span>
                    </div>
                  </button>
               </div>
              </div>
            </div>
            <p className="footer__copyright">Ecobazar eCommerce © 2021. All Rights Reserved</p>
          </div>
       </footer>
    </>
  );
}
 
export default Footer;