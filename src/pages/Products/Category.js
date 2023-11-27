import React,{useState} from 'react'
import './category.scss'
import Radio from './Radio';
const Category = ({ onFilterChange }) => {
 const [priceFilter, setPriceFilter] = useState("");
const handlePriceFilterChange = (event) => {
  onFilterChange(event);
};  return (
    <div className="border col-3">
      <br />
      <h2>Phân loại</h2>
      <div style={{ paddingTop: "50px" }}>
        <h4>Sản Phẩm</h4>
        <h4>Giá</h4>
        <Radio
          onChange={handlePriceFilterChange}
          label="Tất Cả"
          value="all"
          checked={priceFilter === "all"}
        />
        <Radio
          onChange={handlePriceFilterChange}
          label="dưới 100k"
          value="< 100k"
          checked={priceFilter === "< 100k"}
        />
        <Radio
          onChange={handlePriceFilterChange}
          label="100k đến 200k"
          value="100 - 200k"
          checked={priceFilter === "100 - 200k"}
        />
        <Radio
          onChange={handlePriceFilterChange}
          label="Trên 300k"
          value="> 300k"
          checked={priceFilter === "> 300k"}
        />
      </div>
    </div>
  );
};

export default Category
