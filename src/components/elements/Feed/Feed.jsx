import { feedImages } from '../../../data/constantVariables'
import FeedImage from '../FeedImage/FeedImage';
import './Feed.css'
import React, { createContext, useEffect, useState } from 'react'
import { fullWidth, lineOfFour, groupOfThree } from '../../../utils/functions/gridRandomizer.js'

export const FeedContext = createContext()

const Feed = () => {
useEffect(() => {
  lineOfFour()
  groupOfThree()
  fullWidth()
}, [])

const [imagesAddedToCart, setImagesAddedToCart] = useState([])

  return (
    
    <>
    <FeedContext.Provider value={{imagesAddedToCart, setImagesAddedToCart}}>
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
      </FeedContext.Provider>
    </>
  );
}

export default Feed