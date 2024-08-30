import React, { useContext } from 'react'
import { FormContext } from '../../../../App'
import { checkoutFormChecker } from '../../../../utils/functions/checkoutFormChecker'

const FormInput = ({id, type, placeholder, disabled=false, fieldToModify, infoToChange, setInfoToChange}) => {
  return (
    <>
    <input id={id} 
      type={type} 
      placeholder={placeholder}  
      disabled={disabled}
      onChange={(e)=>{

        if(type == "checkbox"){
          const newVal = {...infoToChange}
          newVal[fieldToModify] = e.target.checked
          setInfoToChange(newVal)
        } else {
          const newVal = {...infoToChange}
          newVal[fieldToModify] = e.target.value
          setInfoToChange(newVal)
        }
      }}
    />
    <label htmlFor={id}>{placeholder}</label>
    </>
  )
}

export default FormInput