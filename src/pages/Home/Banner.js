import React from 'react'
import './Banner.scss'
export default function Banner() {
  return (
    <div>
      {/* 3 Ảnh dưới navbar */}
      <section className=" bn container-xxl d-flex justify-content-between">
        <span className="col-7  bander banner-big"></span>
        <span className="col-5  d-flex flex-column justify-content-between  ">
          <div className="banner-small bander "></div>
          <div className="banner-small bander "></div>
        </span>
      </section>
    </div>
  );
}
