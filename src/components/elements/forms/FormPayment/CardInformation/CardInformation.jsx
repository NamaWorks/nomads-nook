import FormInput from '../../FormInput/FormInput'
import './CardInformation.css'
import React from 'react'

const CardInformation = ({hidden}) => {

  return (
    <div className={`card-information ${hidden && "hidden"}` }>
          
    <p className='card-info-text'>card information</p>

    {/* <label htmlFor="card-number">card number</label>
    <input id='card-number' disabled={hidden ? true : false} type="number" placeholder='1234 1234 1234 1234'/> */}

<FormInput id={"card-number"} type={"number"} placeholder={"1234 1234 1234 1234"} disabled={hidden ? true : false}/>

    <div className='card-data-row'>
      {/* <label htmlFor="expiration-date">expiration </label> 
      <input id='expiration-date' disabled={hidden ? true : false} type="number" placeholder='mm / yy' /> */}
      <FormInput id={"expiration-date"} type={"number"} placeholder={"mm / yy"} disabled={hidden ? true : false}/>

      {/* <label htmlFor="cvc">cvc</label>
      <input type="number" disabled={hidden ? true : false} placeholder='cvc'/> */}
      <FormInput id={"cvc"} type={"number"} placeholder={"cvc"} disabled={hidden ? true : false}/>

    </div>


  </div>
  )
}

export default CardInformation