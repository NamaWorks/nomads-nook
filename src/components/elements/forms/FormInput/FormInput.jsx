import React from 'react'

const FormInput = ({id, type, placeholder, disabled=false}, fnc) => {
  return (
    <>
    <input id={id} type={type} placeholder={placeholder}  disabled={disabled}
      onChange={()=>{fnc || console.log("no function added")}}
    />
    <label htmlFor={id}>{placeholder}</label>
    </>
  )
}

export default FormInput