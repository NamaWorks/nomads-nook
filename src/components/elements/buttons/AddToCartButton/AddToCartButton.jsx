import { FeedContext } from '../../../../App.jsx'
import './AddToCartButton.css'

import React, { useContext, useState } from 'react'



const AddToCartButton = () => {

const {imagesAddedToCart, setImagesAddedToCart} = useContext(FeedContext)
const [addedToCart, setAddedToCart] = useState(false)
  
  return (
    <button className='add-to-cart-btn'
          onClick={
            (e)=>{
              const imageId = e.target.parentElement.querySelector("img").id
              if(!(imagesAddedToCart.includes(imageId))){
                setImagesAddedToCart([...imagesAddedToCart,imageId])
                setAddedToCart(true)
              } else {
                console.error("already included")
              }
            }
          }>
      <div className='btn-content'>
        <p>{addedToCart ? "already in your cart" : "add to cart"}</p>
        <div className='arrow'>
          <img src="assets/svg/arrow.svg" alt="" />
        </div>
      </div>
    </button>
  )
}

export default AddToCartButton