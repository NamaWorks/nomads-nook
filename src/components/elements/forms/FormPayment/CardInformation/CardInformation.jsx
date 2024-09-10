import { FormContext } from '../../../../../App'
import { cardInformationFormatter } from '../../../../../utils/functions/cardInformationFormatter'
import useCardInfoFormatter from '../../../../../utils/hooks/useCardInfoFormatter'
import FormInput from '../../FormInput/FormInput'
import './CardInformation.css'
import React, { useContext, useEffect, useState } from 'react'

const CardInformation = ({hidden}) => {

  const formsElements = useContext(FormContext)

  const {cardInformation} = formsElements
  const {setCardInformation} = formsElements

  const [formattedInfo, setFormattedInfo] = useState({cardNumber:"card number", expirationDate: "MM / YY", cvc: "cvc"})

    useEffect(()=>{
      setFormattedInfo(cardInformationFormatter(cardInformation))
      console.log(formattedInfo)
    },[cardInformation])

  return (
    <div className={`card-information ${hidden && "hidden"}` }>
          
    <p className='card-info-text'>card information</p>

      <FormInput id={"card-number"} type={"number"} placeholder={"card number"} disabled={hidden ? true : false} fieldToModify={"cardNumber"} infoToChange={cardInformation} setInfoToChange={setCardInformation} max={2}/>
      <p id='card-number-displayed' className='formatted-info' >{formattedInfo.cardNumber}</p>

    <div className='card-data-row'>

      <FormInput id={"expiration-date"} type={"number"} placeholder={"expiration date"} disabled={hidden ? true : false} fieldToModify={"expirationDate"} infoToChange={cardInformation} setInfoToChange={setCardInformation} />
      <p id='expiration-date-displayed' className='formatted-info' >{formattedInfo.expirationDate}</p>

      <FormInput id={"cvc"} type={"number"} placeholder={"cvc"} disabled={hidden ? true : false} fieldToModify={"cvc"} infoToChange={cardInformation} setInfoToChange={setCardInformation} />
      <p id='cvc-displayed' className='formatted-info' >{formattedInfo.cvc}</p>

    </div>


  </div>
  )
}

export default CardInformation