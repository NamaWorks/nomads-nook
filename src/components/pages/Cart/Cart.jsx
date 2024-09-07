import './Cart.css'
import { useContext, useMemo } from 'react'
import { FeedContext, FormContext } from '../../../App'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'

import NavBar from '../../elements/NavBar/NavBar'
import { feedImages } from '../../../data/constantVariables'
import FormButton from '../../elements/buttons/FormButton/FormButton'
import TicketItem from '../../elements/TicketItem/TicketItem'
import Date from '../../elements/Date/Date'


const Cart = () => {
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  const { imagesAddedToCart, setImagesAddedToCart} = useContext(FeedContext)
  const { orderNumber, setOrderNumber } = useContext(FormContext)

  let imagesObjToPrint = []

  const imagesObjToAdd = useMemo(() => {
    imagesAddedToCart.forEach((imageId)=>{
    const presentImage =  feedImages.find((image) => {
        console.log(image.id)
        return image.id == imageId
      });
      imagesObjToPrint.push(presentImage)
    })
  }, [imagesAddedToCart])

  console.log(imagesObjToAdd)


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
      <main className="cart-page">
        <div className="hero-cart">
          <img
            src="https://res.cloudinary.com/dgrhbsilh/image/upload/v1723556880/21_RTC_P12_react-advanced/pexels-rethaferguson-4177520_sod7cf.jpg"
            alt=""
          />
        </div>

        <div className="ticket-container">
          <div className="date-order-container">
            <h2>order #{orderNumber} for nomad's nook</h2>
            <Date />
          </div>

          <div className="dotted-line"></div>

          <div className="added-images-container">

            {
              imagesObjToPrint.map((imageObj, i)=>{
                return (
                  <TicketItem key ={i} image={imageObj} />
                );
              })
            }


          </div>

          <div className="dotted-line"></div>

          <div className="final-part-container">
            <div className="item-count-container">
              <p className="accent">Item count</p>
              <p className="accent">#{imagesAddedToCart.length}</p>
            </div>
        <div className='pre-btn'>
        <div className="dotted-line"></div>
        
        <FormButton 
            btnClass="proceed-checkout-btn"
            color="cream"
            link="/checkout"
            text="proceed to checkout"
          />
          </div>
          </div>
        </div>


      </main>
    </>
  );
}

export default Cart