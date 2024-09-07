import { useDate } from "../../../utils/hooks/useDate"
const Date = () => {
  return (
    <p className="accent">{`${useDate().month} ${useDate().day}, ${ useDate().year} ${useDate().time}`}</p>    
  )
}

export default Date