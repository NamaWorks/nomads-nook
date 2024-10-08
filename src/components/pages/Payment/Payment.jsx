import { FeedContext, FormContext } from '../../../App'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'
import FormPayment from '../../elements/forms/FormPayment/FormPayment'
import NavBar from '../../elements/NavBar/NavBar'
import PopUp from '../../elements/PopUp/PopUp'
import './Payment.css'


import React, { useContext, useState } from 'react'

const Payment = () => {

  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  const {imagesAddedToCart} = useContext(FeedContext)
  const {licenseInfo} = useContext(FormContext)
  const {setLicenseInfo} = useContext(FormContext)

  const [popupTextsPayment, setPopupTextsPayment] = useState([])
  const [buttonHoveredPayment, setButtonHoveredPayment] = useState(false)

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
      <PopUp
      color={"coral"} 
      title={"you can use these details for the test:"}
      textA={"CARD NO: 1234 1234 1234 1234"}
      textB={"Expiration Date (MM/YY): 01/28"}
      textC={"CVV/CVC:000"}
    />
        <h3 className='payment-title'>payment</h3>
        <div className='price-container'>
          <p className='payment-pricing'> 
            {
              licenseInfo.license + " " + "$" + (imagesAddedToCart.length*licenseInfo.pricePerImage).toFixed(2)
            } 
            </p>
        </div>

<FormPayment popupTexts={popupTextsPayment} setPopupTexts={setPopupTextsPayment} setButtonHovered={setButtonHoveredPayment} buttonHovered={buttonHoveredPayment} />
        
      </section>
    </main>
  </>
  )
}

export default Payment