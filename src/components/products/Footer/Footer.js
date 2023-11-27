import React, {memo} from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div className="container-fluid "style={{backgroundColor:'#222',fontSize:'1.2rem',color:'#DDD'}}>
      <MDBFooter
        className="container-xxl text-center text-lg-left"
      >
        <MDBContainer className="p-4 pb-0">
          <MDBRow>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <MDBIcon icon="store" className="mr-3" />
                Cửa hàng ABC
              </h6>
              <p>Địa chỉ: 123 Đường Cách Mạng Tháng 8, Quận 1, TP.HCM</p>
              <p>Số điện thoại: 1900 1234</p>
              <p>Email: support@shopabc.com</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Về chúng tôi
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Giới thiệu
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tuyển dụng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Chính sách bảo mật
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Hỗ trợ khách hàng
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Phương thức thanh toán
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Chính sách đổi trả
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Chính sách bảo hành
                </a>
              </p>
            </MDBCol>

            <hr className="w-100 clearfix d-md-none" />

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Kết nối với chúng tôi
              </h6>
              <p>
                <MDBIcon fab icon="facebook" className="mr-3" /> Facebook
              </p>
              <p>
                <MDBIcon fab icon="twitter" className="mr-3" /> Twitter
              </p>
              <p>
                <MDBIcon fab icon="youtube" className="mr-3" /> Youtube
              </p>
              <p>
                <MDBIcon fab icon="instagram" className="mr-3" /> Instagram
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="text-center py-3">
          <p>&copy; {new Date().getFullYear()} Copyright: Cửa hàng ABC</p>
        </div>
      </MDBFooter>
    </div>
  );
}

export default memo(Footer);