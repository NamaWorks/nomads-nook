import React, { useContext, useEffect, useState } from 'react'
import './FormButton.css'
import { Link } from 'react-router-dom'
import { FormContext } from '../../../../App'
const FormButton = (props) => {
  const formsElements = useContext(FormContext)
  const [active, setActive] = useState(true)
  const { checkoutInformation } = formsElements;

  useEffect(()=>{
    if(props.checkerFnc){
      props.checkerFnc(props.toCheck) == false && setActive(false)
      props.checkerFnc(props.toCheck) == true && setActive(true)
    }        
  },[checkoutInformation])

  return (
    <>
    <button 
    onMouseEnter={(e)=>{
      e.preventDefault()
      console.warn("button hovered")
    }}
    className={`${props.btnClass || "undefined-btn"} form-button ${props.color || "cream"}`}
    >
      <Link 
        to={props.link || ""}
        className={active ? "abled" : "disabled"}
      >
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