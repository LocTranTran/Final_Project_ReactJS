import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/user/homepage/Homepage';
import ProfilePage from './pages/user/profilepage/ProfilePage';
import Master from './pages/user/theme/master/Master';
import { Rooters } from './utils/Rooters';
const renderUserRouter = () =>{
  const userRouters = [
    {
      path : Rooters.User.Home,
      component : <Homepage/>
    },
    {
      path : Rooters.User.Profile,
      component :<ProfilePage/>
    },
  ]
  return (
    //đưa master bọc các thẻ khác để map
    <Master>
      <Routes>
          {userRouters.map((index,item) => (
              <Route key ={index} path ={item.path} element = {item.component}/>
          ))}
      </Routes>
    </Master>
  )
}
const RooterCustom = () => {
  return renderUserRouter();
}

export default RooterCustom
