import { useState } from 'react'
import './FeedImage.css'
import RateButton from '../RateButton/RateButton'
import AddToCartButton from '../AddToCartButton/AddToCartButton'



const FeedImage = ({ url, i}) => {
  
  
  const [imgHover, setImgHover] = useState(true)


  return (
    <div className="feed-image-container">
      <img 
        src={url} 
        alt={`image-${i}`} 
      />

      {imgHover && <RateButton />}
      <AddToCartButton />
    </div>
  )
}

export default FeedImage