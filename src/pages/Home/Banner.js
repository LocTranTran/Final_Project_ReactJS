import React from "react";
import "./Banner.scss";
export default function Banner() {

  return (
    <>
      <div className="banner">
        <div className="banner__list">
          <section className="banner__items">
            {/* <div className="banner__items-info">
              <span className="banner__info-sub-title">
                Chào mừng bạn đến với Shopery
              </span>
              <h1 className="banner__items-title ">
                Thời trang và phụ kiện thời thượng
              </h1>
              <p className="banner__items-sale">Giảm giá lên đến 30%</p>
              <p className="banner__items-sub-sale">
                Miễn phí vận chuyển cho tất cả đơn hàng. Chúng tôi giao hàng,
                bạn thả ga mua sắm
              </p>
              <button className="banner__items-button">
                Khám phá ngay
                <img src="./assets/image/arrow.svg" alt="" />
              </button>
            </div>
            <figure className="banner__items-img-block">
              {/* <img src="../../assets/image/bannens.png" alt="" /> */}
            <button className="banner__items-button">
                Khám phá ngay
                <svg 
                    width="17"
                    height="15" 
                    viewBox="0 0 17 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M16 7.50055H1" 
                        stroke="currentColor" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                      <path 
                        d="M9.9502 1.47552L16.0002 7.49953L9.9502 13.5245"
                        stroke="currentColor" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                    </svg>
              </button>
          </section>
          <section className="banner__items">
            {/* <div className="banner__items-info">
              <span className="banner__info-sub-title">
                Chào mừng bạn đến với Shopery
              </span>
              <h1 className="banner__items-title ">
                Thời trang và phụ kiện thời thượng
              </h1>
              <p className="banner__items-sale">Giảm giá lên đến 30%</p>
              <p className="banner__items-sub-sale">
                Miễn phí vận chuyển cho tất cả đơn hàng. Chúng tôi giao hàng,
                bạn thả ga mua sắm
              </p>
              <button className="banner__items-button">
                Khám phá ngay
                <img src="./assets/image/arrow.svg" alt="" />
              </button>
            </div>
            <figure className="banner__items-img-block">
              {/* <img src="../../assets/image/bannens.png" alt="" /> */}
            <button className="banner__items-button">
                Khám phá ngay
                <svg 
                    width="17"
                    height="15" 
                    viewBox="0 0 17 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M16 7.50055H1" 
                        stroke="currentColor" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                      <path 
                        d="M9.9502 1.47552L16.0002 7.49953L9.9502 13.5245"
                        stroke="currentColor" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                    </svg>
              </button>
          </section>
          {/* <section className="banner__items">
            <div className="banner__items-info">
              <span className="banner__items-sub-title">
                Welcome to shopery
              </span>
              <h1 className="banner__items-title">
                Fresh & Healthy Organic Food
              </h1>
              <p className="banner__items-sale">
                Sale up to <b>30% OFF</b>
              </p>
              <p className="banner__items-sub-sale">
                Free shipping on all your order. we deliver, you enjoy
              </p>
              <button className="banner__items-button">
                Shop now
                <img src="./assets/image/arrow.svg" alt="" />
              </button>
            </div>
            <figure className="banner__items-img-block">
              <img src="./assets/image/img-main.png" alt="" />
            </figure>
          </section>
          <section className="banner__items">
            <div className="banner__items-info">
              <span className="banner__info-sub-title">Welcome to shopery</span>
              <h1 className="banner__items-title">
                Fresh & Healthy Organic Food
              </h1>
              <p className="banner__items-sale">Sale up to 30% OFF</p>
              <p className="banner__items-sub-sale">
                Free shipping on all your order. we deliver, you enjoy
              </p>
              <button className="banner__items-button">
                Shop now
                <img src="./assets/image/arrow.svg" alt="" />
              </button>
            </div>
            <figure className="banner__items-img-block">
              <img src="./assets/image/img-main.png" alt="" />
            </figure>
          </section> */}
          <div className="banner__dots-gr">
            <div className="banner__dots-items banner__dots-items--active"></div>
            <div className="banner__dots-items"></div>
            <div className="banner__dots-items"></div>
          </div>
        </div>
        <div className="banner__featured">
          <div className="banner__featured-list">
            <div className="banner__featured-items">
              <img
                src="./assets/image/icon-ship.svg"
                alt=""
                className="banner__featured-icon"
              />
              <div className="banner__featured-items-body">
                <span className="banner__featured-items-title">
                  Free Shipping
                </span>
                <span className="banner__featured-items-sub">
                  Free shipping on all your order
                </span>
              </div>
            </div>
            <div className="banner__featured-items">
              <img
                src="./assets/image/icon-suport.svg"
                alt=""
                className="banner__featured-icon"
              />
              <div className="banner__featured-items-body">
                <span className="banner__featured-items-title">
                  Free Shipping
                </span>
                <span className="banner__featured-items-sub">
                  Free shipping on all your order
                </span>
              </div>
            </div>
            <div className="banner__featured-items">
              <img
                src="./assets/image/icon-bag.svg"
                alt=""
                className="banner__featured-icon"
              />
              <div className="banner__featured-items-body">
                <span className="banner__featured-items-title">
                  Free Shipping
                </span>
                <span className="banner__featured-items-sub">
                  Free shipping on all your order
                </span>
              </div>
            </div>
            <div className="banner__featured-items">
              <img
                src="./assets/image/icon-pack.svg"
                alt=""
                className="banner__featured-icon"
              />
              <div className="banner__featured-items-body">
                <span className="banner__featured-items-title">
                  Free Shipping
                </span>
                <span className="banner__featured-items-sub">
                  Free shipping on all your order
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
