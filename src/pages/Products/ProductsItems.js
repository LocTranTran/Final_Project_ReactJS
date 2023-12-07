import React, { memo,useContext } from 'react'
import './Products.scss'
import '../../pages/Style.scss'
import{Link} from'react-router-dom';

import { BsPlus,BsEyeFill } from 'react-icons/bs';



const ProductsItems = ({ product }) => {
  console.log(product);
  const{id,name,images, category,price}=product;
  return (
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
        
        </div>
    </div>
    
  );
}

//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(ProductsItems)
