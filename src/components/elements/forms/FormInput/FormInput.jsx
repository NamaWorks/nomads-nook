import React from 'react'

const FormInput = ({id, type, placeholder, disabled=false}) => {
  return (
    <>
    <input id={id} type={type} placeholder={placeholder}  disabled={disabled}/>
    <label htmlFor={id}>{placeholder}</label>
    </>
  )
}

export default FormInput