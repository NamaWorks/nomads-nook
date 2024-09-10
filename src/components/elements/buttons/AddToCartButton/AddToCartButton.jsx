import { FeedContext } from '../../../../App.jsx'
import './AddToCartButton.css'

import React, { useContext, useState } from 'react'

const AddToCartButton = ({alreadyAdded, setAlreadyAdded}) => {

  console.log(alreadyAdded)

const {imagesAddedToCart, setImagesAddedToCart} = useContext(FeedContext)
  
  return (
    <button className='add-to-cart-btn'
          onClick={
            (e)=>{
              const imageId = e.target.parentElement.querySelector("img").id
              if(!(imagesAddedToCart.includes(imageId))){
                setImagesAddedToCart([...imagesAddedToCart,imageId])
                setAlreadyAdded(true)
              } else {
                setAlreadyAdded(true)
                console.error("already included")
              }
            }
          }>
      <div className='btn-content'>
        <p>{alreadyAdded == true ? "already in your cart" : "add to cart"}</p>
        <div className='arrow'>
          <img src="/public/assets/svg/arrow.svg" alt="" />
        </div>
      </div>
    </button>
  )
}

export default AddToCartButton