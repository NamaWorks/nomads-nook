import React from 'react'
import NavBar from '../../elements/NavBar/NavBar'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'

const NotFound = () => {
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  return (
    
    <>
    <NavBar
        titleSize={titleSize}
        navPos={navPos}
        navGap={navGap}
        navHeight={navHeight}
        navTop={navTop}
        titleBottom={titleBottom}
       />
    <div>404</div>
    </>
  )
}

export default NotFound