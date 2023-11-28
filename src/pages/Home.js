import React, { memo } from "react";
import Banner from "./Home/components/Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* Component Banner hiển thị 3 hình ảnh */}
      <Banner />
    </div>
  );
};

// memo đảm bảo rằng component không được render lại khi không có sự thay đổi trong props.
export default memo(Home);
