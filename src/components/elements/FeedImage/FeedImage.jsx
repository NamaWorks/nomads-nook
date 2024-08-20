import { useState } from 'react'
import './FeedImage.css'
import RateButton from '../RateButton/RateButton'
import AddToCartButton from '../AddToCartButton/AddToCartButton'



const FeedImage = ({ url, i }) => {
  
  const [imgHover, setImgHover] = useState(false)

  return (
    <div className="feed-image-container">
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