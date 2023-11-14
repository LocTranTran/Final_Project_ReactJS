import React from "react";
import Button from "../../common/Button";

import './Header.scss'
const Header = () => {
  return (
    <div className="header">
      <div className="container-xxl align-items-center text-center ">
        <div className="row align-items-center text-center">
          <div className="col-2 "><h2>TNT</h2></div>
          <div className="col-6 row  ">
            <div className="col-2">Trang Chủ</div>
            <div className="col-2">Sản Phẩm </div>
            <div className="col-2">Giới Thiệu </div>
            <div className="col-2">Liên Hệ</div>
          </div>
          <div className="col-4 row ">
          <div className="col-4">
              <Button title={<i className="fa-solid fa-store fa-xl" style={{color: 'red'}} />} />
              
          </div>          
           <div className="col-4"><Button title="Đăng Nhập"/></div>
           <div className="col-4"><Button title="Đăng Ký"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default Header;
