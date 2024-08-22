import './ProceedToCheckoutbutton.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ProceedToCheckoutButton = () => {
  return (
    <>
    <button className='proceed-checkout-btn'>
      <Link to="/checkout">
      <div className='btn-content'>
        <p>proceed to checkout</p>
        <div className='arrow'>
          <img src="assets/svg/arrow.svg" alt="" />
        </div>
      </div>
      </Link>
    </button>
    </>
  )
}

export default ProceedToCheckoutButton