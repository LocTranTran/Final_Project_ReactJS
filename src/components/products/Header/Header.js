import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default Header
