import { getRandomPosition } from '../../../utils/functions/getRandomPosition'
import './HoverCartImage.css'

const HoverCartImage = (props) => {
  const { image } = props
  return (
    <div 
    className='image-preview'
    style={{left:getRandomPosition().left, top:getRandomPosition().top}}
    >
      <img src={image.url} alt="" />
    </div>
  )
}

export default HoverCartImage