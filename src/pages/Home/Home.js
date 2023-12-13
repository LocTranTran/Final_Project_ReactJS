import React, { memo } from "react";
import Gird from "./Gird";
import Banner from "./Banner";
import ProductList from "../Products/ProductList";
import ProductHome from "../Products/ProductHome";
import CartCompact from "../Cart/CartCompact";
import './Home.scss';
import BannerInfo from "../../components/BannerInfo";
import DisBanner from "../Products/DisBanner";
const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center  flex-column ">
      <BannerInfo/>
      <Banner />
      <ProductHome nums={10}/>
      {/* <ProductList numItem={5} className='productlist'/> */}
      <DisBanner/>
      <Gird />
    </div>
    
  );
};

// memo đảm bảo rằng component không được render lại khi không có sự thay đổi trong props.
export default memo(Home);
