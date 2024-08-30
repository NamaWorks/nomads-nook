import './PopUp.css'
import React from 'react'

const PopUp = ({title, textA, textB, textC, textD, color}) => {
  return (
    <>
    <div className={`notification-popup ${color}`}>
      <div className='text-half'>
        <p className="title">{title}</p>
        <div className='texts'>
        {textA && <p className="text">{textA}</p>}
        {textB && <p className="text">{textB}</p>}
        {textC && <p className="text">{textC}</p>}
        {textD && <p className="text">{textD}</p>}
        </div>
      </div>
      <div className='closing-icon'>
        <button className='closing-btn'
          onClick={(e)=>{
            e.target.parentElement.parentElement.remove()
          }}
        >X</button>
      </div>
    </div>
    </>
  )
}

export default PopUp