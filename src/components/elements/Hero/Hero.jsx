import React from 'react'
import './Hero.css'
import NavBar from '../NavBar/NavBar'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'

const Hero = () => {
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(true)
  return (
    <>
    <div className="hero">
      <div className='hero-img-container'>
      </div>
      <NavBar
        titleSize={titleSize}
        navPos={navPos}
        navGap={navGap}
        navHeight={navHeight}
        navTop={navTop}
        titleBottom={titleBottom}
       />
      </div>
    </>
  )
}

export default Hero