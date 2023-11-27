import React from 'react'
import './Gird.scss'
const Gird = () => {
  return (
    <div className="girds d-flex justify-content-around ">
      <div className="gird border">
        <button type="button" className="btn btn-light btn-gird ">
          Mua Ngay
        </button>
      </div>
      <div className="gird border">
        <button type="button" className="btn btn-light btn-gird ">
          Mua Ngay
        </button>
      </div>
      <div className="gird border">
        <button type="button" className="btn btn-light btn-gird ">
          Mua Ngay
        </button>
      </div>
    </div>
  );
}

export default Gird
