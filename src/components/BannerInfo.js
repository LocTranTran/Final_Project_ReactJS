import React from 'react'
import './BannerInfo.scss'
const BannerInfo = ({page}) => {
  return (
    <div className=" bannerinfo container-fluid ">
      <div className="bannerinfos container-xxl d-flex">
        <i className="fa-solid fa-house"></i>{" "}
        <i className="fa-solid fa-chevron-right"></i>
        <h1>{page}</h1>
      </div>
    </div>
  );
};

export default BannerInfo
