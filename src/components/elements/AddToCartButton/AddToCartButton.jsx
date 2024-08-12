import './AddToCartButton.css'

import React from 'react'

const AddToCartButton = () => {
  return (
    <button className='add-to-cart-btn'>
      <div className='btn-content'>
        <p>add to cart</p>
        <div className='arrow'>
          <img src="assets/svg/arrow.svg" alt="" />
        </div>
      </div>
    </button>
  )
}

export default AddToCartButton