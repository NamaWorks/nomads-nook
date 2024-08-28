import { useEffect } from 'react'
import { feedImages } from '../../../data/constantVariables'
import { moveCarousel } from '../../../utils/functions/carouselsPosition'
import CarouselImg from '../CarouselImg/CarouselImg'
import './VerticalCarousel.css'

const VerticalCarousel = () => {

  useEffect(()=>{
    const carousel = document.querySelector(".carousel-container-inner")
    moveCarousel(carousel,400)
  },[])

  return (
<>
  <div className='carousel-container'>
    <div className='carousel-container-inner'>
      {feedImages.map((image, i)=>{
        return(<CarouselImg key={i} url={image.url} alt={image.alt} />)
      })}
    </div>
  </div>
</>
  )
}

export default VerticalCarousel