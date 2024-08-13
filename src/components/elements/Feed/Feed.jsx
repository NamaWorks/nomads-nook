import { feedImagesUrls } from '../../../data/constantVariables'
import FeedImage from '../FeedImage/FeedImage';
import './Feed.css'
import React, { useEffect } from 'react'
import { fullWidth, lineOfFour, groupOfThree } from '../../../utils/functions/gridRandomizer.js'

const Feed = () => {
useEffect(() => {
  lineOfFour()
  groupOfThree()
  fullWidth()
}, [])

  return (
    <>
      <div className="images-feed">
        {feedImagesUrls.map((url, i)=> {
          return(
          <FeedImage
            url={url}
            i={i}
            key={i}
          />)
        })}
      </div>
    </>
  );
}

export default Feed