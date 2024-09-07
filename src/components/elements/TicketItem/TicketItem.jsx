import React, { useState } from 'react'
import './TicketItem.css'
import HoverCartImage from '../HoverCartImage/HoverCartImage'

const TicketItem = (props) => {

  const [hovered, setHovered] = useState(false)
  const {image} = props
  return (
      <div className="ticket-item">
        <p 
          className="ticket-item-name"
          onMouseEnter={()=>{
            setHovered(!hovered)
          }}
          onMouseOut={()=>{
            setHovered(!hovered)
          }}
        >{image.id}</p>
        {hovered && <HoverCartImage image={image} />}
      </div>
  )
}

export default TicketItem