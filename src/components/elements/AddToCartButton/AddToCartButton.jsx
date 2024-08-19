import { FeedContext } from '../../../App'
import './AddToCartButton.css'

import React, { useContext } from 'react'



const AddToCartButton = () => {

const {imagesAddedToCart, setImagesAddedToCart} = useContext(FeedContext)
  
  return (
    <button className='add-to-cart-btn'
          onClick={
            (e)=>{
              const imageId = e.target.parentElement.querySelector("img").id
              if(!(imagesAddedToCart.includes(imageId))){
                setImagesAddedToCart([...imagesAddedToCart,imageId])
              } else {
                alert("already included")
              }
            }
          }>
      <div className='btn-content'>
        <p>add to cart</p>
        <div className='arrow'>
          <img src="assets/svg/arrow.svg" alt="" />
        </div>
      </div>
    </button>
  )
}

export default AddToCartButton