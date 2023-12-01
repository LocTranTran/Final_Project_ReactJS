import React, { memo } from "react";
import Gird from "./Gird";
import Banner from "./Banner";
import ProductList from "../Products/ProductList";
import CartCompact from "../Cart/CartCompact";
const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center  flex-column ">
      <Banner />
      <ProductList numItem={8} />
      <CartCompact/>
      {/* Component Grid hiển thị bố cục dạng lưới */}
      <Gird />
    </div>
  );
};

// memo đảm bảo rằng component không được render lại khi không có sự thay đổi trong props.
export default memo(Home);
