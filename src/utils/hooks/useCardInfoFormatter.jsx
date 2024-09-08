import { useContext } from "react"
import { FormContext } from "../../App"


const useCardInfoFormatter = () => {
  const { cardInformation } = useContext(FormContext)
  console.log(cardInformation)
}

export default useCardInfoFormatter