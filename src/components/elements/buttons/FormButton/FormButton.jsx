import React from 'react'
import './FormButton.css'
import { Link } from 'react-router-dom'
const FormButton = (props) => {

  return (
    <>
    <button 
    onClick={(e)=>{
      e.preventDefault()
      props.fnc ? props.fnc : console.log(e.target)
    }}
    className={`${props.btnClass || "undefined-btn"} form-button ${props.color || "cream"}`}
    >
      <Link to={props.link || ""}>
      <div className='btn-content'>
        <p>{props.text || "pending to add text"}</p>
        <div className='arrow'>
          <img src="assets/svg/arrow.svg" alt="" />
        </div>
      </div>
      </Link>
    </button>
    </>
  )
}

export default FormButton