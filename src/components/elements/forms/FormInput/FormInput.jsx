import React from 'react'

const FormInput = ({id, type, placeholder}) => {
  return (
    <>
    <input id={id} type={type} placeholder={placeholder} />
    <label htmlFor={id}>{placeholder}</label>
    </>
  )
}

export default FormInput