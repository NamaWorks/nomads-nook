import './CarouselImg.css'

import React from 'react'

const CarouselImg = ({url, alt}) => {
  return (
  <div className='carousel-img-container'>
    <img src={url} alt={alt} />
  </div>
  )
}

export default CarouselImg