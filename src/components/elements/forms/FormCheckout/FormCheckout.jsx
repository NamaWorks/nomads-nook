import "./FormCheckout.css";
import { useReducer } from "react";
import {
  licenseInitialState,
  licenseReducer,
} from "../../../../utils/reducers/licenseReducer";
import { useContext } from "react";
import { FormContext } from "../../../../App";
import FormInput from "../FormInput/FormInput";
import FormButton from "../../buttons/FormButton/FormButton";
import { checkoutFormChecker } from "../../../../utils/functions/checkoutFormChecker";

const FormCheckout = () => {
  const formsElements = useContext(FormContext);

  let { licenseInfo } = formsElements;
  let { checkoutInformation } = formsElements;
  let { setCheckoutInformation } = formsElements;
  let { setLicenseInfo } = formsElements

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
            console.log(e.target.value);
            dispatchLicenseInfo({
              type: e.target.value,
              params: {
                licenseInfo: licenseInfo,
                setLicenseInfo: setLicenseInfo,
              },
            });
            console.log(licenseInfo);
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
        />
      </form>
    </>
  );
};

export default FormCheckout;
