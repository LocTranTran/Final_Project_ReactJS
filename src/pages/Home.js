import React, { memo } from "react";
import Products from "./Products/ProductList";
import Gird from "./Home/Gird";

const Home = () => {
  return (
    <div>
      <Products/>
      {/* Component Grid hiển thị bố cục dạng lưới */}
      <Gird />
    </div>
  );
};

// memo đảm bảo rằng component không được render lại khi không có sự thay đổi trong props.
export default memo(Home);
