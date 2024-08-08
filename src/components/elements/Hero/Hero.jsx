import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className='hero-img-container'>
        {/* <img src="https://res.cloudinary.com/dgrhbsilh/image/upload/v1723055622/21_RTC_P12_react-advanced/pexels-matreding-18111223_a35ou8.jpg" alt="Hero image" /> */}
      </div>
      <nav>
        <div className='logo-container'>
          <h1 className='nn-logo'>NN</h1>
        </div>
        <ul className='nav-ul'>
          <li className="nav-ul-items">gallery</li>
          <li className="nav-ul-items">about</li>
          <li className="nav-ul-items">cart</li>
        </ul>
      </nav>
      </div>

      <div className="test-div"></div>
    </>
  )
}

export default Hero