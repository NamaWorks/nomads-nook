import { FormContext } from '../../../../App.jsx'
import FormButton from '../../buttons/FormButton/FormButton.jsx'
import CardInformation from './CardInformation/CardInformation.jsx'
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

          {licenseInfo.license == "personal" && <CardInformation hidden={true} />}
          {!(licenseInfo.license == "personal") && <CardInformation hidden={false} />}


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