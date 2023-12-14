import React, { useState, useEffect } from 'react'
import './Gird.scss'
import { Link } from 'react-router-dom';
const Gird = () => {
  const [days, setDays] = useState(3); // Số ngày ban đầu
  const [hours, setHours] = useState(21); // Số giờ ban đầu
  const [minutes, setMinutes] = useState(45); // Số phút ban đầu
  const [seconds, setSeconds] = useState(21); // Số giây ban đầu
  useEffect(() => {
    // Tính toán tổng số giây từ số ngày, giờ, phút và giây ban đầu
    let totalSecondsRemaining =
      days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

    // Giảm giá trị đếm ngược
    const interval = setInterval(() => {
      if (totalSecondsRemaining > 0) {
        totalSecondsRemaining--;
        const remainingDays = Math.floor(
          totalSecondsRemaining / (24 * 60 * 60)
        );
        const remainingHours = Math.floor(
          (totalSecondsRemaining % (24 * 60 * 60)) / (60 * 60)
        );
        const remainingMinutes = Math.floor(
          (totalSecondsRemaining % (60 * 60)) / 60
        );
        const remainingSeconds = totalSecondsRemaining % 60;

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      }
    }, 1000); // 1000 milliseconds = 1 giây

    // Xóa interval khi component bị unmount
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  return (
    <div className="bannar">
      <div className="container">
        <div className="bannar__list">
          {/* -----------------Items-1---------------- */}
          <div className="bannar__items bannar__items-first">
            <div className='bannar__items-content'>
              <span className="bannar__sub-first">Best Deals</span>
              <h3 className="bannar__title-first bannar__items-title">Sale of the Month</h3>
              <div className="bannar__timer-gr">
              <span className='bannar__time'>{`${formatNumber(days)} : ${formatNumber(hours)} : ${formatNumber(minutes)} : ${formatNumber(seconds)}`}</span>
              </div>
              <Link className="bannar__button" to='/products'>Shop Now 
                {/* <span>
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
                  </span> */}
                </Link>
            </div>

          </div>
          {/* -----------------Items-2---------------- */}
          <div className="bannar__items bannar__items-seconds">
            <div className='bannar__items-content'>
              <span className="bannar__sub-seconds">85% Fat Free</span>
              <h3 className="bannar__title-seconds bannar__items-title">Low-Fat Meat</h3>
              <p className="bannar__sale-seconds">Started at 
                <b  className='bannar__sale-outstanding-seconds'>$79.99</b>
              </p>
              <Link className="bannar__button" to='/products'>Shop Now 
                {/* <span>
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
                  </span> */}
                </Link>
            </div>
          </div>
          {/* -----------------Items-3---------------- */}
          <div className="bannar__items bannar__items-thirds">
            <div className='bannar__items-content'>
              <span className="bannar__sub-thirds">Summer Sale</span>
              <h3 className="bannar__title-thirds bannar__items-title">100% Fresh Fruit</h3>
              <p className="bannar__sale-thirds">Started at 
                <b  className='bannar__sale-outstanding-thirds'>64% OFF</b>
              </p>
              <Link className="bannar__button" to='/products'>Shop Now 
                {/* <span>
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
                  </span> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gird
