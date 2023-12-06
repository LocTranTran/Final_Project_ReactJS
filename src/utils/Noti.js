import React from 'react'
import './info.css'
const Noti = ({ isLoading, values }) => {
    return (
    <>{isLoading ? (<div className="element">{values}</div>) : ("")}</>)
};

export default Noti
