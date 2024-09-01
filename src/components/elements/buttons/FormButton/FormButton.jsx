import React, { useContext, useEffect, useState } from 'react'
import './FormButton.css'
import { Link } from 'react-router-dom'
import { FormContext } from '../../../../App'

const FormButton = ({checkerFnc, setPopupTexts, setButtonHovered, btnClass, link, text, color, toCheck}) => {
  const formsElements = useContext(FormContext)
  const [active, setActive] = useState(true)
  const { checkoutInformation } = formsElements;

  useEffect(()=>{
    if(checkerFnc){
      checkerFnc(toCheck).activate == false && setActive(false)
      checkerFnc(toCheck).activate == true && setActive(true)
    }
    if(setPopupTexts){
      setPopupTexts(checkerFnc(toCheck).infoToDisplay)
    }

  },[checkoutInformation])

  return (
    <>
    <button 
      onClick={(e)=>{e.preventDefault()}}
      onMouseEnter={(e)=>{
        e.preventDefault()
        setButtonHovered && setButtonHovered(true)
        console.warn("button hovered")
      }}
      onMouseLeave={()=>{
        setButtonHovered && setButtonHovered(false)
      }}
      className={`${btnClass || "undefined-btn"} form-button ${color || "cream"}`}
    >
      <Link 
        to={link || ""}
        className={active ? "abled" : "disabled"}
      >
      <div className='btn-content'>
        <p>{text || "pending to add text"}</p>
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