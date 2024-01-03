import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online plataform that facilitate to momotors how to dress their character for 
                the chapters and buy differents kits from special events that are very expensive.
            </p>
            <p>
                E-commerce websites typically display products along with detailed descriptions, images, prices and any available variations (e.g., size, colors).
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox