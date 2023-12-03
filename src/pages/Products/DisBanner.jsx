import React, { useEffect, useState } from 'react';
import './DisBanner.scss';

const DisBanner = () => {
  const [days, setDays] = useState(3); // Số ngày ban đầu
  const [hours, setHours] = useState(21); // Số giờ ban đầu
  const [minutes, setMinutes] = useState(45); // Số phút ban đầu
  const [seconds, setSeconds] = useState(21); // Số giây ban đầu

  useEffect(() => {
    // Tính toán tổng số giây từ số ngày, giờ, phút và giây ban đầu
    let totalSecondsRemaining = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

    // Giảm giá trị đếm ngược
    const interval = setInterval(() => {
      if (totalSecondsRemaining > 0) {
        totalSecondsRemaining--;
        const remainingDays = Math.floor(totalSecondsRemaining / (24 * 60 * 60));
        const remainingHours = Math.floor((totalSecondsRemaining % (24 * 60 * 60)) / (60 * 60));
        const remainingMinutes = Math.floor((totalSecondsRemaining % (60 * 60)) / 60);
        const remainingSeconds = totalSecondsRemaining % 60;

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      }
    }, 1000); // 1000 milliseconds = 1 giây

    // Xóa interval khi component bị unmount
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  return (
    <div className="disbanded container-xxl d-flex justify-content-between">
      <div className="disbanded__time">
        <h2>BEST DEALS</h2>
        <h1>GIẢM GIÁ TRONG THÁNG </h1>
        <span className="time">
          <p>{`${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`}</p>
          <span className='d-flex gap-xxl-5  day'><b>Ngày</b> <b>Giờ</b> <b>Phút</b> <b>Giây</b></span><br/>
        </span>
        <button className="btn">Mua Ngay <i className="fa-solid fa-arrow-right fa-xxl"></i></button>
      </div>
      <div className="disbanded__bg"></div>
    </div>
  );
};

export default DisBanner;