export const paymentFormChecker = (formObj) => {

  // console.clear()

  const {cardInformation}= formObj
  const {paymentInformation}= formObj
  const {licenseInfo}= formObj
  
  // console.log(cardInformation)
  // console.log(paymentInformation)
  // console.log(licenseInfo.license);
  

let requiredFields = {
  paymentInformation: {
    billingAddress: false,
    country: false,
    vatNumber: false,
  },
  cardInformation: {
    cardNumber: false,
    expirationDate: false,
    cvc: false,
  }
}

let activate = true


if(paymentInformation.billingAddress == ""){
  requiredFields.paymentInformation.billingAddress = false
} else { 
  requiredFields.paymentInformation.billingAddress = true 
}

if(paymentInformation.country == ""){
  requiredFields.paymentInformation.country = false
} else { 
  requiredFields.paymentInformation.country = true 
}

if(paymentInformation.vatNumber == ""){
  requiredFields.paymentInformation.vatNumber = false
} else { 
  requiredFields.paymentInformation.vatNumber = true 
}

if(licenseInfo.license == 'personal'){
    requiredFields.cardInformation.cardNumber = true
    requiredFields.cardInformation.expirationDate = true 
    requiredFields.cardInformation.cvc = true 
    // console.log(requiredFields.cardInformation)
} else {
  if(cardInformation.cardNumber == ""){
    requiredFields.cardInformation.cardNumber = false
  } else { 
    requiredFields.cardInformation.cardNumber = true 
  }
  
  if(cardInformation.expirationDate == ""){
    requiredFields.cardInformation.expirationDate = false
  } else { 
    requiredFields.cardInformation.expirationDate = true 
  }
  
  if(cardInformation.cvc == ""){
    requiredFields.cardInformation.cvc = false
  } else { 
    requiredFields.cardInformation.cvc = true 
  }
}







let msg = []
for (const field in requiredFields.paymentInformation) {
  // console.log(requiredFields.paymentInformation[field])
  if(requiredFields.paymentInformation[field] == false){
    activate = false
    field == "billingAddress" && msg.push("check you added a correct billing address")
    field == "country" && msg.push("check you added a correct country") 
    field == "vatNumber" && msg.push("check you added a correct vat number") 
  }
}
for (const field in requiredFields.cardInformation) {
  // console.log(requiredFields.cardInformation[field])
  if(requiredFields.cardInformation[field] == false){
    activate = false
    field == "cardNumber" && msg.push("check you added a correct card number")
    field == "expirationDate" && msg.push("check you added a correct expiration date") 
    field == "cvc" && msg.push("check you added a correct cvc number") 
  }
}

// console.log(requiredFields.cardInformation)
// console.log(requiredFields.paymentInformation)
return {activate:activate, infoToDisplay:msg}
}