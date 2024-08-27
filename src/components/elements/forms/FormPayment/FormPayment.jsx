import { FormContext } from '../../../../App.jsx'
import FormButton from '../../buttons/FormButton/FormButton.jsx'
import FormInput from '../FormInput/FormInput.jsx'
import CardInformation from './CardInformation/CardInformation.jsx'
import './FormPayment.css'

import React, { useContext } from 'react'

const FormPayment = () => {

  const formsElements = useContext(FormContext)
  
  let {licenseInfo} = formsElements


  return (
    <>
      <form>

        <FormInput id={"billing-address"} type={"text"} placeholder={"billing address"} />

        <FormInput id={"country"} type={"text"} placeholder={"country"} />

        <FormInput id={"vat-number"} type={"text"} placeholder={"VAT number"} />

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