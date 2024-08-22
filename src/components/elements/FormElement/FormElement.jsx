import "./FormElement.css";
import React, { createContext, useState } from "react";

const FormElement = () => {

  return (
    <>
        <form>
          <select
            name="select-license"
            id="select-license"
            defaultChecked={"type of license"}
          >
            <option hidden>type of license</option>
            <option value="personal">personal</option>
            <option value="comercial">comercial</option>
            <option value="other">other </option>
          </select>

          <label htmlFor="name-input">name</label>
          <input id="name-input" type="text" placeholder="name" />
          <label htmlFor="surname-input">surname</label>
          <input id="surname-input" type="text" placeholder="surname" />
          <label htmlFor="email-input">email</label>
          <input id="email-input" type="email" placeholder="email" />

      <div className="checkboxes-container">
          <div className="checkbox-container">
            <input id="conditions-input" type="checkbox" />
            <label htmlFor="conditions-input">Accept conditions</label>
          </div>
          <div className="checkbox-container">
            <input id="newsletter-input" type="checkbox" />
            <label htmlFor="newsletter-input"> join newsletter</label>
          </div>
      </div>
      
    <button 
    className='form-next-btn'
    onClick={(e)=>{
      e.preventDefault()
      console.log("button clicked")
    }}
    >
      <div className='btn-content'>
        <p>proceed to payment</p>
        <div className='arrow'>
          <img src="assets/svg/arrow.svg" alt="" />
        </div>
      </div>
    </button>
      
        </form>
    </>
  );
};

export default FormElement;
