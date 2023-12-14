import React from "react";
import ProductList from "./ProductList";
import Category from "./Category";
import './DisBanner'
import BannerInfo from "../../components/BannerInfo";
const Products = () => {
  return (
    <>
      <BannerInfo page={"Sản Phẩm"}/>
    <div className=" flex-column container-xxl d-flex justify-content-center ">
      <Category />
      <ProductList />
    </div>
    </>
  );
};

export default Products;
