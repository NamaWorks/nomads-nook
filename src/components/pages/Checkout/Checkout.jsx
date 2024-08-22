import './Checkout.css'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'
import NavBar from '../../elements/NavBar/NavBar'
import React, { createContext, useContext, useState } from 'react'
import FormCheckout from '../../elements/forms/FormCheckout/FormCheckout'


export const FormContext = createContext();

const Checkout = () => {

  const [licenseSelected, setLicenseSelected] = useState();
  
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)

  return (
    <>
    <FormContext.Provider value={{licenseSelected, setLicenseSelected}}>
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

        <section className='purchase-half'>
          <h3 className='purchase-title'>purchase</h3>
          <FormCheckout />
        </section>
      </main>
      </FormContext.Provider>
    </>
  )
}

export default Checkout