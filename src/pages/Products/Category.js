import React, { useState, useContext } from 'react';
import './category.scss';
import Radio from './Radio';
import { CartContext } from '../../utils/CartContext';

const Category = () => {
  const { handlePriceFilter, handleNameFilter } = useContext(CartContext);
  const [priceFilter, setPriceFilter] = useState('');

  const handlePriceFilters = (event) => {
    const selectedPrice = event.target.value;
    setPriceFilter(selectedPrice);
    handlePriceFilter(event);
  };

  return (
    <div className="border d-flex justify-content-center col-2" style={{ height: '500px' }}>
      <br />
      {/* <h2>Phân loại</h2> */}
      <div style={{ paddingTop: '20px' }}>
        <h4>Sản Phẩm</h4>
        <Radio
          onChange={handleNameFilter}
          label="Tất Cả "
          value="all"
          checked={priceFilter === 'all'}
        />
        <h4>Giá</h4>
        <Radio
          onChange={handlePriceFilters}
          label="Tất Cả"
          value="all"
          checked={priceFilter === 'all'}
        />
        <Radio
          onChange={handlePriceFilters}
          label="dưới 100k"
          value="< 100k"
          checked={priceFilter === '< 100k'}
        />
        <Radio
          onChange={handlePriceFilters}
          label="100k đến 200k"
          value="100 - 200k"
          checked={priceFilter === '100 - 200k'}
        />
        <Radio
          onChange={handlePriceFilters}
          label="Trên 300k"
          value="> 300k"
          checked={priceFilter === '> 300k'}
        />
      </div>
    </div>
  );
};

export default Category;