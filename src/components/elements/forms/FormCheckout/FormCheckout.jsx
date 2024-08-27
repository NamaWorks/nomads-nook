import "./FormCheckout.css";
import { useReducer, } from "react";
import { Link } from 'react-router-dom'
import { licenseInitialState, licenseReducer } from "../../../../utils/reducers/licenseReducer";
import { useContext } from "react";
import { FormContext } from "../../../../App";
import FormInput from "../FormInput/FormInput";


const FormCheckout = () => {
  const formsElements = useContext(FormContext)

  let {licenseInfo} = formsElements
  let {setLicenseInfo} = formsElements

  const [stateLicenseInfo ,dispatchLicenseInfo] = useReducer(licenseReducer, licenseInitialState)


  return (
    <>
        <form>
          <select
            name="select-license"
            id="select-license"
            defaultChecked={ licenseInfo.license || "type of license"}
            value={ licenseInfo.license || "type of license"}
            onChange={(e)=>{
              console.log(e.target.value)
              dispatchLicenseInfo({ type: e.target.value, params: {licenseInfo: licenseInfo, setLicenseInfo: setLicenseInfo}})
              console.log(licenseInfo)
            }}
          >
            <option hidden>type of license</option>
            <option value="personal">personal license</option>
            <option value="commercial">commercial license</option>
            <option value="extended">extended license</option>
          </select>

          {/* <label htmlFor="name-input">name</label>
          <input id="name-input" type="text" placeholder="name" /> */}
          <FormInput id={"name-input"} type={"text"} placeholder={"name"}/>

          {/* <label htmlFor="surname-input">surname</label>
          <input id="surname-input" type="text" placeholder="surname" /> */}
          <FormInput id={"surname-input"} type={"text"} placeholder={"surname"}/>

          {/* <label htmlFor="email-input">email</label>
          <input id="email-input" type="email" placeholder="email" /> */}
          <FormInput id={"email-input"} type={"email"} placeholder={"email"}/>

      <div className="checkboxes-container">
          <div className="checkbox-container">
            {/* <input id="conditions-input" type="checkbox" />
            <label htmlFor="conditions-input">Accept conditions</label> */}
            <FormInput id={"conditions-input"} type={"checkbox"} placeholder={"Accept conditions"}/>
          </div>
          <div className="checkbox-container">
            {/* <input id="newsletter-input" type="checkbox" />
            <label htmlFor="newsletter-input"> join newsletter</label> */}
            <FormInput id={"newsletter-input"} type={"checkbox"} placeholder={"join newsletter"}/>
          </div>
      </div>
      
    {/* <button 
    className='form-next-btn'
    onClick={(e)=>{
      e.preventDefault()
      console.log("button clicked")
    }}
    >
        <Link to="/payment" >
      <div className='btn-content'>
        <p>proceed to payment</p>
        <div className='arrow'>
          <img src="assets/svg/arrow.svg" alt="" />
        </div>
      </div>
      </Link>
    </button> */}
      
        </form>
    </>
  );
};

export default FormCheckout;
