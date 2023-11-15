import React,{memo,useEffect,useState} from 'react'
import ProductsItems from './ProductsItems';
import axios from 'axios';

const Products = ({products}) => {
  // Tạo state products
  const [productsData, setProductsData] = useState([]);
  // Gọi Api và cập nhật sản phẩm trong state
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get('https://64818aa329fa1c5c503191e0.mockapi.io/addres');
        const data = res.data;
        setProductsData(data);
      }catch (e) {
        console.error(e);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <ul>
        {productsData.map((product) =>(
          <ProductsItems key ={product.id} product = {product}/>
        ))}
      </ul>
    </div>
  )
}

//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(Products)
