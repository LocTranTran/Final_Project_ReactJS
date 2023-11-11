import {memo } from 'react'
import "./style.scss"
const Header = () => {
  return (
    <div className='header__top'>
        <div className='containers'>
        <h1>Header</h1>
        </div>
    </div>
  )
}

export default memo(Header) 
