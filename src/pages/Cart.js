import React,{memo} from 'react'

const Cart = () => {
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(Cart)
