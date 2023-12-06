import React, { useState, useContext } from 'react';
import './category.scss';
import { CartContext } from '../../utils/CartContext';
// import Radio from './Radio';

const Category = () => {
  const { handlePriceFilter, handleNameFilter,handleSort } = useContext(CartContext);
  const [priceFilter, setPriceFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const handlePriceFilters = (event) => {
    const selectedPrice = event.target.value;
    setPriceFilter(selectedPrice);
    handlePriceFilter(event);
  };
  const handleNameFilters = (event) => {
    const selectedPrice = event.target.value;
    setNameFilter(selectedPrice);
    handleNameFilter(event);
  };

  return (
    <div className="d-flex align-content-center justify-content-between  " >
      {/* <div style={{ paddingTop: '20px' }}>
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
      </div> */}
      <div className='d-flex gap-5'>
      <select className='filter__price' onChange={handleNameFilters} value={nameFilter}>
          <option value="all">Loại Sản Phẩm</option>
          <option value="Quần">Quần</option>
          <option value="Áo">Áo</option>
          <option value="Kính">Kính</option>
          <option value="Ví">Ví</option>
          <option value="Túi">Túi</option>
          <option value="Giày">Giày</option>
        </select>
      <select className='filter__price' onChange={handlePriceFilters} value={priceFilter}>
          <option value="all">Giá</option>
          <option value="< 100k">Dưới 100k</option>
          <option value="100 - 200k">100k đến 200k</option>
          <option value="> 300k">Trên 300k</option>
        </select>

      </div>
      <div className='d-flex gap-5'>
        <select className='filter__price' onChange={handleSort}>
          <option value="asc">Từ thấp đến cao</option>
          <option value="desc">Từ cao đến thấp</option>
        </select>
        </div>
    </div>
  );
};

export default Category;