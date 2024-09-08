import { FormContext } from '../../../../../App'
import FormInput from '../../FormInput/FormInput'
import './CardInformation.css'
import React, { useContext } from 'react'

const CardInformation = ({hidden}) => {

  const formsElements = useContext(FormContext)

  const {cardInformation} = formsElements
  const {setCardInformation} = formsElements

  return (
    <div className={`card-information ${hidden && "hidden"}` }>
          
    <p className='card-info-text'>card information</p>

      <FormInput id={"card-number"} type={"number"} placeholder={"1234 1234 1234 1234"} disabled={hidden ? true : false} fieldToModify={"cardNumber"} infoToChange={cardInformation} setInfoToChange={setCardInformation} />

    <div className='card-data-row'>

      <FormInput id={"expiration-date"} type={"number"} placeholder={"mm / yy"} disabled={hidden ? true : false} fieldToModify={"expirationDate"} infoToChange={cardInformation} setInfoToChange={setCardInformation} />

      <FormInput id={"cvc"} type={"number"} placeholder={"cvc"} disabled={hidden ? true : false} fieldToModify={"cvc"} infoToChange={cardInformation} setInfoToChange={setCardInformation} />

    </div>


  </div>
  )
}

export default CardInformation