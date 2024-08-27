import { useCallback, useEffect, useMemo, useState } from 'react'
import './HoverCartImage.css'
import {useRandomPosition} from '../../../utils/hooks/useRandomPosition'

const HoverCartImage = (props) => {
  // const {top, left} = useRandomPosition()
  const { image } = props

  return (
    <div 
      className='image-preview'
      // style={{top:top},{left:left}}
      >
      <img src={image.url} alt="" />
    </div>
  )
}

export default HoverCartImage