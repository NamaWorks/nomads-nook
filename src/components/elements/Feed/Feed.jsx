import { feedImagesUrls } from '../../../data/constantVariables'
import FeedImage from '../FeedImage/FeedImage';
import './Feed.css'
import React from 'react'

const Feed = () => {
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