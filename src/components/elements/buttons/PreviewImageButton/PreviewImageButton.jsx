import { Link } from 'react-router-dom'
import './PreviewImageButton.css'
import React from 'react'

const PreviewImageButton = ({shown, imageId}) => {
  return (
    <>
    {shown && (
        <Link
        to={`/gallery/${imageId}`}
        className='preview-btn'
      >
        <p>preview</p>
      </Link>
    )}
    </>
  )
}

export default PreviewImageButton