import './NotFound.css'
import { useNavScroll } from '../../../utils/hooks/useNavScroll'
import { Link } from 'react-router-dom'



const NotFound = () => {
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  return (
    
    <>
    <div className='main-not-found-container'>
    <div className='not-found-msg-container'>
      <div className='not-found-title-container'>
        <p>Error Message</p>
      </div>
      <p className='not-found-p'>seems like the page you're looking for could not be found. Let's take you back to the main page.</p>
      <div className='not-found-dotted-line'></div>
      <button 
        className='not-found-back-home-btn'>
        <Link to="/"><p>back to home</p></Link>
      </button>
    </div>
    </div>
    </>
  )
}

export default NotFound