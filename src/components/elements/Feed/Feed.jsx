import { feedImages } from '../../../data/constantVariables'
import FeedImage from '../FeedImage/FeedImage';
import './Feed.css'
import  { useCallback, useEffect, useState } from 'react'
import { fullWidth, lineOfFour, groupOfThree } from '../../../utils/functions/gridRandomizer.js'
import { getRandomInt } from '../../../utils/functions/getRandomInt.js';

const Feed = () => {
  const [imagesAddedToFeed, setImagesAddedToFeed] = useState(8)
  const [scrollPos, setScrollPos] = useState()
  
  const addMoreImages = useCallback(()=>{
    const newScrollVal = window.scrollY + window.innerHeight
    if(document.body.scrollHeight <= newScrollVal){
      setImagesAddedToFeed(imagesAddedToFeed+8)
    }
    console.log(imagesAddedToFeed)
    getRandomInt(0,10)<=1 && fullWidth()
    getRandomInt(0,10)<=2 && !(window.innerWidth<=800) && lineOfFour()
    getRandomInt(0,10)<=3 && !(window.innerWidth<=800) && groupOfThree()
  },[imagesAddedToFeed])
  
useEffect(() => {
  window.addEventListener("scroll", addMoreImages)
  getRandomInt(0,10)<=1 && fullWidth()
  getRandomInt(0,10)<=2 && !(window.innerWidth<=800) && groupOfThree()
  getRandomInt(0,10)<=3 && !(window.innerWidth<=800) && lineOfFour()
}, [addMoreImages])




  return (
    
    <>
      <div className="images-feed">
        {feedImages.map((img, i)=> {
          if(i<imagesAddedToFeed){
          return(
          <FeedImage
            url={img.url}
            id={img.id}
            i={i}
            key={i}
          />)}
        })}


      </div>
    </>
  );
}

export default Feed