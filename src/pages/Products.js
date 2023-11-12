import React,{memo} from 'react'

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(Products)
