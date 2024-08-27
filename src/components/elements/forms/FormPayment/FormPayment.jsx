import { FormContext } from '../../../../App.jsx'
import FormButton from '../../buttons/FormButton/FormButton.jsx'
import './FormPayment.css'

import React, { useContext } from 'react'

const FormPayment = () => {

  const formsElements = useContext(FormContext)
  
  let {licenseInfo} = formsElements


  return (
    <>
      <form>

        <label htmlFor="billing-address">billing address</label>
        <input id='billing-address' type="text" placeholder='billling adress' />

        <label htmlFor="country">country</label>
        <input id='country' type="text" placeholder='country' />

{licenseInfo.license == "personal" && (
            <div className="card-information hidden">
          
            <p className='card-info-text'>card information</p>
  
            <label htmlFor="card-number">card number</label>
            <input id='card-number' disabled type="number" placeholder='1234 1234 1234 1234'/>
  
            <div className='card-data-row'>
              <label htmlFor="expiration-date">expiration </label> 
              <input id='expiration-date' disabled type="number" placeholder='mm / yy' />
  
              <label htmlFor="cvc">cvc</label>
              <input type="number" disabled placeholder='cvc'/>

            </div>
  
  
          </div>
)}

{!(licenseInfo.license == "personal") && (
            <div className="card-information">
          
            <p className='card-info-text'>card information</p>
  
            <label htmlFor="card-number">card number</label>
            <input id='card-number' type="number" placeholder='1234 1234 1234 1234'/>
  
            <div className='card-data-row'>
              <label htmlFor="expiration-date">expiration </label> 
              <input id='expiration-date' type="number" placeholder='mm / yy' />
  
              <label htmlFor="cvc">cvc</label>
              <input type="number" placeholder='cvc'/>
  
            </div>
  
  
          </div>
)}

          <FormButton 
            btnClass="payment-btn"
            color="blue"
            // fnc=
            // link="/"
            text="pay"
          />
          
          <FormButton 
            btnClass="back-to-checkout-btn"
            color="coral"
            // fnc=
            link="/checkout"
            text="back to checkout"
          />
      </form>
    </>
  )
}

export default FormPayment