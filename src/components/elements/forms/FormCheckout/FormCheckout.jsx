import "./FormCheckout.css";
import { useReducer, useState } from "react";
import {
  licenseInitialState,
  licenseReducer,
} from "../../../../utils/reducers/licenseReducer";
import { useContext } from "react";
import { FormContext } from "../../../../App";
import FormInput from "../FormInput/FormInput";
import FormButton from "../../buttons/FormButton/FormButton";
import { checkoutFormChecker } from "../../../../utils/functions/checkoutFormChecker";

const FormCheckout = ({popupTexts, setPopupTexts, setButtonHovered, buttonHovered}) => {
  const formsElements = useContext(FormContext);

  const { licenseInfo } = formsElements;
  const { checkoutInformation } = formsElements;
  const { setCheckoutInformation } = formsElements;
  const { setLicenseInfo } = formsElements

  

  const [stateLicenseInfo, dispatchLicenseInfo] = useReducer(
    licenseReducer,
    licenseInitialState
  );

  return (
    <>
      <form>
        <select
          name="select-license"
          id="select-license"
          defaultChecked={licenseInfo.license || "type of license"}
          value={licenseInfo.license || "type of license"}
          onChange={(e) => {
            dispatchLicenseInfo({
              type: e.target.value,
              params: {
                licenseInfo: licenseInfo,
                setLicenseInfo: setLicenseInfo,
              },
            });
          }}
        >
          <option hidden>type of license</option>
          <option value="personal">personal license</option>
          <option value="commercial">commercial license</option>
          <option value="extended">extended license</option>
        </select>

        <FormInput id={"name-input"} type={"text"} placeholder={"name"} fieldToModify={"name"} infoToChange={checkoutInformation} setInfoToChange={setCheckoutInformation} />

        <FormInput id={"surname-input"} type={"text"} placeholder={"surname"} fieldToModify={"surname"} infoToChange={checkoutInformation} setInfoToChange={setCheckoutInformation}/>

        <FormInput id={"email-input"} type={"email"} placeholder={"email"} fieldToModify={"email"}infoToChange={checkoutInformation} setInfoToChange={setCheckoutInformation}/>

        <div className="checkboxes-container">
          <div className="checkbox-container">
            <FormInput
              id={"conditions-input"}
              type={"checkbox"}
              placeholder={"Accept conditions"}
              fieldToModify={"conditions"}
              infoToChange={checkoutInformation} setInfoToChange={setCheckoutInformation}
            />
          </div>
          <div className="checkbox-container">
            <FormInput
              id={"newsletter-input"}
              type={"checkbox"}
              placeholder={"join newsletter"}
              fieldToModify={"newsletter"}
              checkoutInformation={checkoutInformation} setInfoToChange={setCheckoutInformation}
            />
          </div>
        </div>

        <FormButton
          btnClass="form-next-btn"
          color="white"
          checkerFnc={checkoutFormChecker}
          toCheck={{ licenseInfo, checkoutInformation }}
          link="/payment"
          text="proceed to payment"
          popupTexts={popupTexts} setPopupTexts={setPopupTexts} 
          setButtonHovered={setButtonHovered} buttonHovered={buttonHovered}
        />
      </form>
    </>
  );
};

export default FormCheckout;
