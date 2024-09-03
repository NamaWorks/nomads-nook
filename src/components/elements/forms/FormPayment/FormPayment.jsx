import { FormContext } from '../../../../App.jsx'
import { paymentFormChecker } from '../../../../utils/functions/paymentFormChecker.js'
import FormButton from '../../buttons/FormButton/FormButton.jsx'
import FormInput from '../FormInput/FormInput.jsx'
import CardInformation from './CardInformation/CardInformation.jsx'
import './FormPayment.css'

import React, { useContext } from 'react'

const FormPayment = ({popupTexts, setPopupTexts, setButtonHovered, buttonHovered}) => {
const formsElements = useContext(FormContext)

// const {paymentInformation, setPaymentInformation, cardInformation, setCardInformation} = formsElements

const {licenseInfo} = formsElements
const {paymentInformation} = formsElements
const {setPaymentInformation} = formsElements
const {cardInformation} = formsElements

  


  return (
    <>
      <form>

        <FormInput id={"billing-address"} type={"text"} placeholder={"billing address"} fieldToModify={"billingAddress"} infoToChange={paymentInformation} setInfoToChange={setPaymentInformation}/>
        

        <FormInput id={"country"} type={"text"} placeholder={"country"} fieldToModify={"country"} infoToChange={paymentInformation} setInfoToChange={setPaymentInformation} />

        <FormInput id={"vat-number"} type={"text"} placeholder={"VAT number"} fieldToModify={"vatNumber"} infoToChange={paymentInformation} setInfoToChange={setPaymentInformation} />

        {licenseInfo.license == "personal" && <CardInformation hidden={true} />}
        {/* <CardInformation hidden={false} /> */}
        {!(licenseInfo.license == "personal") && <CardInformation hidden={false} />}


          <FormButton 
            btnClass="payment-btn"
            color="blue"
            checkerFnc={paymentFormChecker}
            toCheck={{paymentInformation, cardInformation, licenseInfo}}
            link="/bill"
            // popupTexts={popupTexts} setPopupTexts={setPopupTexts} 
            text="pay"
          />
          
          <FormButton 
            btnClass="back-to-checkout-btn"
            color="coral"
            // checkerFnc={}
            link="/checkout"
            text="back to checkout"
          />
      </form>
    </>
  )
}

export default FormPayment