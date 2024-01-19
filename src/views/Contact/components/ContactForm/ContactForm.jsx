import React, {useRef,useState} from 'react'
import { plusIcon, minusIcon } from '../../../../const';
import "./ContactForm.css"

const ContactForm = () => {
    const formRef = useRef();
    const [guestCount,setGuestCount] = useState(0)

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log("handFormSubmit fired")
    }

    const handleGuestCount = (sign)=>{
        if(sign == "+"){
            setGuestCount((guestCount)=>guestCount+1)
        }
        else{
            setGuestCount((guestCount)=>guestCount > 0 ? guestCount-1 : guestCount)

        }
    }
  return (
    <div className="contact-form-parent">
        
        <form className="contact-form" onSubmit={handleFormSubmit} ref={formRef}>
            <div className="contact-form-content">
            <div className="form-div">
                <input type="text" placeholder="Name" autoComplete="off" name="name" className="form-control" />
            </div>
            <div className="form-div">
                <input type="text" placeholder="Email" autoComplete="off" name="email" className="form-control" />
            </div>
            <div className="form-number-row">

                <div className="label-div">
                    <p className="mid-thin">Pick a date</p>
                </div>
                <div className="form-inputs-row">
                <div className="form-dropdown-div">
                    <input type="number" className="number-input" placeholder="MM" min="1" max="12" />
                </div>
                <div className="form-dropdown-div">
                    <input type="number" className="number-input" placeholder="DD" min="1" max="31" />
                </div>
                <div className="form-dropdown-div">
                    <input type="number" className="number-input" placeholder="YYYY" min="2024" max="2026" />
                </div>
                </div>
            </div>
            <div className="form-number-row">
                <div className="label-div">
                    <p className="mid-thin">Pick a time</p>
                </div>
                <div className="form-inputs-row">
                <div className="form-dropdown-div">
                    <input type="number" className="number-input" placeholder="09" min="1" max="12" />
                </div>
                <div className="form-dropdown-div">
                    <input type="number" className="number-input" placeholder="00" min="0" max="60" />
                </div>
                <div className="form-dropdown-div">
                    <select className="select-input" placeholder="YYYY" >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </div>
                </div>
              
            </div>

            <div className="guest-count-row">
                    <button onClick={()=>handleGuestCount("-")} className="guest-select-btn no-btn">
                        <img src={minusIcon} alt="" />
                    </button>
                    <h4>{guestCount} people</h4>
                    <button onClick={()=>handleGuestCount("+")} className="guest-select-btn no-btn">
                        <img src={plusIcon} alt="" />
                    </button>
                </div>
            <div className="form-div">
                <button className="btn primary-btn form-btn">Make a Reservation</button>
            </div>
            </div>
        </form>

    </div>
  )
}

export default ContactForm