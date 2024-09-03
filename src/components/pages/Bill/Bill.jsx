import { FeedContext, FormContext } from '../../../App'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'
import NavBar from '../../elements/NavBar/NavBar'
import { useDate } from '../../../utils/hooks/useDate'
import './Bill.css'
import React, { useContext } from 'react'

const Bill = () => {

  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  const { licenseInfo, checkoutInformation, paymentInformation, cardInformation, orderNumber } = useContext(FormContext)
  const { imagesAddedToCart } = useContext(FeedContext)
  

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

      <main>

        <section id='bill-item'>
          <h1 className='nn-logo' >NN</h1>
          
          <div id='order-info' className='section-part'>
            <p>order #{orderNumber}</p>
            <p className="accent">{`${useDate().month} ${useDate().day}, ${ useDate().year} ${useDate().time}`}</p>
          </div>

          <div className="dotted-line"></div>

          <div id='order-items' className='section-part'>
            {
              imagesAddedToCart.map((item)=>{
                return(<p>{item}</p>)
              })
            }
          </div>

            <div className="dotted-line"></div>

            <div id='order-details' className='section-part'>
              <p>type of license: {licenseInfo.license}</p>
              <p>name: {checkoutInformation.name}</p>
              <p>email: {checkoutInformation.email}</p>
              <p>billing address: {paymentInformation.billingAddress}</p>
              <p>country: {paymentInformation.country}</p>
              <p>vat number: {paymentInformation.vatNumber}</p>
              <p>card Number: {cardInformation.cardNumber}</p>
            </div>


        </section>

      </main>


    </>
  )
}

export default Bill