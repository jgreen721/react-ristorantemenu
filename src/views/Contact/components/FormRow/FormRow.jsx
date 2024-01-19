import React from 'react'
import { curveBottomLeft, patternLines } from '../../../../const'
// import ContactForm from "./components/ContactForm/ContactForm"
import "./FormRow.css"

const FormRow = () => {
  return (
    <div className="form-row">
        <div className="form-overlay-row">
            <div className="bg-overlay">
                <img className="bg-overlay-img" src={curveBottomLeft} alt="" />
            </div>
            <div className="lines-img-div">
                <img src={patternLines} alt="" />
            </div>
        </div>
        {/* <ContactForm/> */}
    </div>
  )
}

export default FormRow