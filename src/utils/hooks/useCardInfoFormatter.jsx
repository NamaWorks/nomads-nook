import { useContext } from "react"
import { FormContext } from "../../App"


const useCardInfoFormatter = () => {

  const {cardInformation, setCardInformation} = useContext(FormContext)
  console.log(cardInformation.cardNumber)

  // setCardInformation({...cardInformation, cardNumber:Number(cardInformation.cardNumber.toString().replace(" ", ""))})
}

export default useCardInfoFormatter