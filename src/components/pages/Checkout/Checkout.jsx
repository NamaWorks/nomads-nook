import './Checkout.css'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'
import NavBar from '../../elements/NavBar/NavBar'
import React, { createContext, useContext, useEffect, useState } from 'react'
import FormCheckout from '../../elements/forms/FormCheckout/FormCheckout'
import PopUp from '../../elements/PopUp/PopUp'

const Checkout = () => {
  
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  const [popupTextsCheckout, setPopupTextsCheckout] = useState([])
  const [buttonHoveredCheckout, setButtonHoveredCheckout] = useState(false)

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

        <section className='purchase-half'>
          { buttonHoveredCheckout && popupTextsCheckout.length && <PopUp color={"blue"} title={"please check the form fields:"} textA={popupTextsCheckout[0]} textB={popupTextsCheckout[1]} textC={popupTextsCheckout[2]} textD={popupTextsCheckout[3]} />}
          <h3 className='purchase-title'>purchase</h3>
          <FormCheckout popupTexts={popupTextsCheckout} setPopupTexts={setPopupTextsCheckout} setButtonHovered={setButtonHoveredCheckout} buttonHovered={buttonHoveredCheckout} />
        </section>
      </main>
    </>
  )
}

export default Checkout