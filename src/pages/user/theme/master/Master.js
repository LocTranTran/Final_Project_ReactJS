import React, {memo } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const Master = ({children,...props}) => {
  return (
    <div {...props}>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default memo(Master)

