import './Cart.css'
import { useContext } from 'react'
import { FeedContext } from '../../../App'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'

import NavBar from '../../elements/NavBar/NavBar'
import { useDate } from '../../../utils/hooks/useDate'
import { feedImages } from '../../../data/constantVariables'
import FormButton from '../../elements/buttons/FormButton/FormButton'
import HoverCartImage from '../../elements/HoverCartImage/HoverCartImage'
import TicketItem from '../../elements/TicketItem/TicketItem'


const Cart = () => {
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  const {imagesAddedToCart, setImagesAddedToCart} = useContext(FeedContext)

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
            <h2>order #{"43490"} for nomad's nook</h2>
            <p className="accent">{`${useDate().month} ${useDate().day}, ${
              useDate().year
            } ${useDate().time}`}</p>
          </div>

          <div className="dotted-line"></div>

          {/* CAN WE CREATE A COMPONENT FOR THE NEXT DIV ??? ALSO COULD USE A useMemo hook */}
          <div className="added-images-container">
            {imagesAddedToCart.map((imageId, i) => {
              console.log(imageId);
              const image = feedImages.find((element) => {
                return element.id == imageId;
              });
              if (image) {
                return (
                  <TicketItem key ={i} image={image} />
                );
              }
            })}
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
            // fnc=
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