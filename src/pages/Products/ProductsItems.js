import React, { memo,useContext } from 'react'
import './Products.scss'
import '../../pages/Style.scss'
<<<<<<< HEAD
import{Link} from'react-router-dom';

import { BsPlus,BsEyeFill } from 'react-icons/bs';



=======
const formatPrice = (amount) => {
  return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
>>>>>>> 7497d6df77af5b52dd28ac65ac68d66072d989fb
const ProductsItems = ({ product }) => {
  console.log(product);
  const{id,name,images, category,price}=product;
  return (
<<<<<<< HEAD
    <div>
        <div className='border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition'>
            <div className='w-full h-full flex justify-center items-center'>
              {/* thêm ảnh sp dô item  */}
                <div className='w-[200px] mx-auto flex justify-center items-center'>
                  <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={images} alt="ảnh products"/>
                </div>
            </div>
            {/* nút thêm sp và xem chi tiết sp */}
            <div className='absolute top-0 right-0 bg-green-400 p-2 flex flex-col items-center
            justify-center gap-y-2  group-hover:opacity-100 '>
              <button >
                  <div className='flex justify-center items-center text-white w-12 h-12 bg-green-600'>
                    <BsPlus className='text-3xl'/>
                  </div>
              </button>
              <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center
               text-primary drop-shadow-xl'> <BsEyeFill/> </Link>
            </div>
          </div>
          {/* ten gia mo ta */}
        <div>
          <Link to={`/product/${id}`}>
          <div className='font-semibold mb-3 '>{name}</div>
         </Link>
          <h2 className='font-semibold'>{price}đ</h2>
        
=======
    <div key={product.id} className="products__items">
      <figure className="products__items-block">
        <img src={product.images} alt=""  className='products__items--img'/>
      </figure>
        <div className="products__items-info">
          <div className='products__items-info-left'>
            <h4 className="products__items-name">{product.name}</h4>
            <span className="products__items-price">{formatPrice(product.price)}</span>
          </div>
          <button className="product__cart-right-button">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83333C6.66667 3.99239 8.15905 2.5 10 2.5V2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333" 
              stroke="currentcolor" 
              stroke-width="1.3" 
              stroke-linecap="round" 
              stroke-linejoin="round"/>
          </svg>
            {/* <img src="./assets/image/cart.svg" alt="" /> */}
            {/* <i class="fa-solid fa-cart-shopping"></i> */}
        </button>
>>>>>>> 7497d6df77af5b52dd28ac65ac68d66072d989fb
        </div>
        
    </div>
    
  );
}

//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(ProductsItems)
