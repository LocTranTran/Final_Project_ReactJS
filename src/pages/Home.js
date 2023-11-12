import React,{memo} from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
//. memo giúp tránh việc render lại thành phần khi các props không thay đổi.
export default memo(Home)
