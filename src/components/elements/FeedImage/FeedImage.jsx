import { useState } from 'react'
import './FeedImage.css'
import RateButton from '../buttons/RateButton/RateButton'
import AddToCartButton from './../buttons/AddToCartButton/AddToCartButton.jsx'



const FeedImage = ({ url, i }) => {
  
  const [imgHover, setImgHover] = useState(false)

  return (
    <div 
      className="feed-image-container"
      onMouseEnter={()=>{setImgHover(true)}}
      onMouseLeave={()=>{setImgHover(false)}}
    >
      <img 
        src={url} 
        alt={`image-id-${i}`}
        id={`image-id-${i}`}
      />

      {imgHover && <RateButton />}
      {imgHover && <AddToCartButton />}
    </div>
  )
}

export default FeedImage