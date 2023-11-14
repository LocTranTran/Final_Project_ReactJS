import React from 'react'
import './button.scss'
const Button = ({title}) => {
  return (
    <div>
      <button class="button">{title}</button>
    </div>
  )
}

export default Button
