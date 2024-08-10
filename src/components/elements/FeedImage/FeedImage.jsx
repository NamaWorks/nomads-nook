import './FeedImage.css'

const FeedImage = ({ url, i}) => {
  return (
    <div className="feed-image-container">
      <img src={url} alt={`image-${i}`} />
    </div>
  )
}

export default FeedImage