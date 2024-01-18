import React from 'react'
import { heroBookingDesktop,heroBookingTablet, heroBookingMobile, logoIcon } from '../../const'
import { FormRow } from './components'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="view-container">
      {/* <div className="contact-hero">
        <div className="contact-logo-div"></div>
      </div> */}
      <header className="hero">
      <div className="desktop-hero hero-content-column">
            <div className="logo-div">
                <img className="logo-icon" src={logoIcon} alt="" />
            </div>
            <div className="hero-content-card">
             <h1 className="thin hero-header slide-right delay-1">Reservations</h1>
            <h5 className="thin my-2 line-h-2 hero-blurb slide-right delay-2">    We can’t wait to host you. If you have any special requirements please feel free to 
  call on the phone number below. We’ll be happy to accommodate you.
            </h5>
            </div> 
        </div> 
        <div className="hero-img-column">
            <picture>
                <source media="(min-width:950px)" srcSet={heroBookingDesktop}/>
                <source media="(min-width:550px)" srcSet={heroBookingTablet}/>
                <img className="hero-img rise-up delay-1" src={heroBookingMobile} alt="hero-bg"/>
            </picture>
        </div>
        {/* <div className="mobile-hero hero-content-column">
            <div className="logo-div">
                <img className="logo-icon" src={logoIcon} alt="" />
            </div>
            <div className="hero-content-card">
             <h1 className="thin hero-header slide-right delay-1">Exquisite dining since 1989</h1>
            <h5 className="thin my-2 line-h-2 hero-blurb slide-right delay-2">  Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
                  the comfort of our farmhouse.
            </h5>
            <button onClick={()=>setShowContact(true)} className="btn transparent-btn rise-up delay-3">Book a table</button>
            </div> /
        </div> */}
</header>
<FormRow/>
    </div>
  )
}

export default Contact