import React, { memo } from "react";
import Banner from "./Home/components/Banner/Banner";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      {/* Component Banner hiển thị 3 hình ảnh */}
      <Banner />
      {/* Component Products hiển thị danh sách sản phẩm */}

      {/* <Products/> */}
      {/* Component Grid hiển thị bố cục dạng lưới */}
      {/* <Gird /> */}
    </div>
  );
};

// memo đảm bảo rằng component không được render lại khi không có sự thay đổi trong props.
export default memo(Home);
