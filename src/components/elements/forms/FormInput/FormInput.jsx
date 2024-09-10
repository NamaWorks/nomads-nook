const FormInput = ({id, type, placeholder, disabled=false, fieldToModify, infoToChange, setInfoToChange, max}) => {
  return (
    <>
    <input id={id} 
      type={type} 
      placeholder={placeholder}  
      disabled={disabled}
      min={0}
      max={ max}
      onChange={(e)=>{
        // console.log(infoToChange)
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