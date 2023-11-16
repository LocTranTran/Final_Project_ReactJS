import React,{memo} from 'react'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
      {/* 3 ảnh dưới header */}
      <Banner/>
    </div>
  )
}
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(Home)
