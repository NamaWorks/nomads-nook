import { useContext } from 'react'
import { FeedContext } from '../../../App'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'

import NavBar from '../../elements/NavBar/NavBar'
import './Cart.css'


const Cart = () => {
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  
  const {imagesAddedToCart, setImagesAddedToCart} = useContext(FeedContext)

  return (
    <>
      {console.log(imagesAddedToCart)}
      <NavBar
        titleSize={titleSize}
        navPos={navPos}
        navGap={navGap}
        navHeight={navHeight}
        navTop={navTop}
        titleBottom={titleBottom}
       />
    <main className='cart-page'>
    <div className="hero-cart">
      <img src="https://res.cloudinary.com/dgrhbsilh/image/upload/v1723556880/21_RTC_P12_react-advanced/pexels-rethaferguson-4177520_sod7cf.jpg" alt="" />

      <div className='ticket-container'>
          
      </div>

    </div>
    </main>
    </>
  )
}

export default Cart