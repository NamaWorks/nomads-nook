import NavBar from '../../elements/NavBar/NavBar'
import './Cart.css'
import React from 'react'

const Cart = () => {
  return (
    <>
    <NavBar />
    <main className='cart-page'>
    <div className="hero-cart">
      <img src="https://res.cloudinary.com/dgrhbsilh/image/upload/v1723556880/21_RTC_P12_react-advanced/pexels-rethaferguson-4177520_sod7cf.jpg" alt="" />
    </div>
    </main>
    </>
  )
}

export default Cart