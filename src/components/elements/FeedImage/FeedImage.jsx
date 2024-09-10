import { useContext, useState } from 'react'
import './FeedImage.css'
import RateButton from '../buttons/RateButton/RateButton'
import AddToCartButton from './../buttons/AddToCartButton/AddToCartButton.jsx'
import { FeedContext } from '../../../App.jsx'
import PreviewImageButton from '../buttons/PreviewImageButton/PreviewImageButton.jsx'



const FeedImage = ({ url, i }) => {
  
  const [imgHover, setImgHover] = useState(false)
  const [alreadyAdded, setAlreadyAdded] = useState(false)
  const {imagesAddedToCart, setImagesAddedToCart} = useContext(FeedContext)

  return (
    <div 
      className="feed-image-container"
      onMouseEnter={(e)=>{
        setImgHover(true)
        const imageId = e.target.parentElement.querySelector("img").id
        if(imagesAddedToCart.includes(imageId)){
          console.log(imageId)
          setAlreadyAdded(true)
        }
      }}
      onMouseLeave={()=>{setImgHover(false)}}
      
    >
      <img 
        src={url} 
        alt={`image-id-${i}`}
        id={`image-id-${i}`}
        onClick={(e)=>{
          setImgHover(!imgHover)
          const imageId = e.target.parentElement.querySelector("img").id
          if(imagesAddedToCart.includes(imageId)){
            console.log(imageId)
            setAlreadyAdded(true)
          }
        }}
      />

      {imgHover ? <RateButton shown={true} /> : <RateButton shown={false} />}
      {imgHover ? <PreviewImageButton shown={true} imageId={`image-id-${i}`}/> : <PreviewImageButton shown={false} imageId={`image-id-${i}`} />}
      {imgHover &&  <AddToCartButton alreadyAdded={alreadyAdded} setAlreadyAdded={setAlreadyAdded}/>}
    </div>
  )
}

export default FeedImage