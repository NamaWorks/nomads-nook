import './ProceedToCheckoutbutton.css'
import React from 'react'

const ProceedToCheckoutButton = () => {
  return (
    <>
    <button className='proceed-checkout-btn'>
    <div className='btn-content'>
        <p>proceed to checkout</p>
        <div className='arrow'>
          <img src="assets/svg/arrow.svg" alt="" />
        </div>
      </div>
    </button>
    </>
  )
}

export default ProceedToCheckoutButton