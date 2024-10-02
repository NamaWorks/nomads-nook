const formatCardNumber = (cardNumber)=>{
  const cardNumberArr = [cardNumber.toString().slice(0,4), cardNumber.toString().slice(4,8), cardNumber.toString().slice(8,12), cardNumber.toString().slice(12,16) ]  
  return cardNumberArr.join("  ")
}

const formatExpirationDate = (expirationDate) => {

  if(expirationDate.length == 0){
    return expirationDate
  } else {
    const expirationDateArr =[expirationDate.toString().slice(0,2), expirationDate.toString().slice(2,4)]
    return expirationDateArr.join(" | ")
  }
}

export const cardInformationFormatter = (cardInformation) =>{

  console.clear()
  console.table(cardInformation)

  const cardNumberFormatted = formatCardNumber(cardInformation.cardNumber)
  const expirationDateFormatted = formatExpirationDate(cardInformation.expirationDate)

  console.table(cardNumberFormatted, expirationDateFormatted)

  
  return {
    cardNumber: cardNumberFormatted || cardInformation.cardNumber,
    expirationDate: expirationDateFormatted || cardInformation.expirationDate,
    cvc: cardInformation.cvc
  }
}
