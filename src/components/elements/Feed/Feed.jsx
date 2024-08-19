import { feedImages } from '../../../data/constantVariables'
import FeedImage from '../FeedImage/FeedImage';
import './Feed.css'
import  { useEffect, useState } from 'react'
import { fullWidth, lineOfFour, groupOfThree } from '../../../utils/functions/gridRandomizer.js'

const Feed = () => {
useEffect(() => {
  lineOfFour()
  groupOfThree()
  fullWidth()
}, [])

const [imagesAddedToCart, setImagesAddedToCart] = useState([])

  return (
    
    <>
      <div className="images-feed">
        {feedImages.map((img, i)=> {
          return(
          <FeedImage
            url={img.url}
            id={img.id}
            i={i}
            key={i}
          />)
        })}
      </div>
    </>
  );
}

export default Feed