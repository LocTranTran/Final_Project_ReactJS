import React,{memo} from 'react';

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  )
}
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(Footer)
 
