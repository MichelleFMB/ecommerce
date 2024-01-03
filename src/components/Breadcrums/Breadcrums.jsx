import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'

const Breadcrums = (props) => {

    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="arrow-icon" /> SHOP <img src={arrow_icon} alt="arrow-icon" /> {product.category} <img src={arrow_icon} alt="arrow-icon" /> {product.name}
    </div>
  )
}

export default Breadcrums