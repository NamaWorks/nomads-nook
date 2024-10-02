import { FeedContext, FormContext } from '../../../App'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'
import NavBar from '../../elements/NavBar/NavBar'
import { useDate } from '../../../utils/hooks/useDate'
import './Bill.css'
import React, { useContext, useEffect } from 'react'
import { feedImages } from '../../../data/constantVariables'
import { getRandomPosition } from '../../../utils/functions/getRandomPosition'
import Date from '../../elements/Date/Date'

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

      <main id='bill-page'>

        <section id='bill-item'>
          <div className="logo-container">
          <h1 id='bill-logo' >NN</h1>

          </div>
          
          <div id='order-info' className='section-part'>
            <p>order #{orderNumber}</p>
            <Date />
          </div>

          <div className="dotted-line"></div>

          <div id='order-items' className='section-part'>
            {
              imagesAddedToCart.map((item, i)=>{
                return(<p key={i}>{item}</p>)
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

        <section id="background-images">


          {
            feedImages.map((image, i)=>{
              if(imagesAddedToCart.includes(image.id)){
                
                return(
                  <div key={i} className='image-bill' id={`${image.id}-bill`} style={{top:getRandomPosition().top/4, right:getRandomPosition().left/1}} >
                    <img src={image.url} alt="" />
                  </div>
                )
              }
            })
          }
        </section>

      </main>


    </>
  )
}

export default Bill