import { useNavScroll } from '../../../utils/hooks/useNavScroll'
import FormPayment from '../../elements/forms/FormPayment/FormPayment'
import NavBar from '../../elements/NavBar/NavBar'
import './Payment.css'

import React from 'react'

const Payment = () => {

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
    <main className="payment-page">
      <section className='image-half'>
        <div className="image-container">
          <img src="https://res.cloudinary.com/dgrhbsilh/image/upload/v1723556864/21_RTC_P12_react-advanced/pexels-gabrielle-meschini-3726370-26076624_zigoxt.jpg" alt="" />
        </div>
      </section>

      <section className='payment-half'>
        <h3 className='payment-title'>payment</h3>
        <div className='price-container'>
          <p className='payment-pricing'> $00.00</p>
        </div>

<FormPayment />
        
      </section>
    </main>
  </>
  )
}

export default Payment