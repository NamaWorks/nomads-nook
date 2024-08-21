import './Checkout.css'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'
import NavBar from '../../elements/NavBar/NavBar'
import React from 'react'

const Checkout = () => {
  
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)

  return (
    <>
      <NavBar
        titleSize={titleSize}
        navPos={navPos}
        navGap={navGap}
        navHeight={navHeight}
        navTop={navTop}
        titleBottom={titleBottom}
      />

      <main className="checkout-page">
        <section className='image-half'>
          <div className="image-container">
            <img src="https://res.cloudinary.com/dgrhbsilh/image/upload/v1723556867/21_RTC_P12_react-advanced/pexels-i-rem-cilingir-1447385586-26737193_fhyjca.jpg" alt="" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Checkout