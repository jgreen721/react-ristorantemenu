import React from 'react'
import { heroBookingDesktop,heroBookingTablet, heroBookingMobile, logoIcon } from '../../../../const'
import {ContactForm} from ".."
import "./ContactHero.css"

const ContactHero = () => {
  return (
    <header className="contact-hero">
        <div className="contact-hero-content-parent">
       <div className="contact-hero-content-column">
           <div className="left-hero-content-column">
            <div className="logo-div contact-logo-div">
                <img className="logo-icon" src={logoIcon} alt="" />
            </div>
            <div className="hero-content-card contact-hero-content-card">
                <h1 className="thin hero-header slide-right delay-1">Reservations</h1>
                <h5 className="thin my-2 line-h-2 hero-blurb slide-right delay-2">    We can’t wait to host you. If you have any special requirements please feel free to 
  call on the phone number below. We’ll be happy to accommodate you.
                </h5>
            </div>
            </div> 
        </div>  
        <div className="contact-hero-content-column">
                <ContactForm/>
        </div>
        </div>

        {/* BgImage Overlay */}
        <div className="hero-img-column contact-hero-img-column">
            <picture>
                <source media="(min-width:950px)" srcSet={heroBookingDesktop}/>
                <source media="(min-width:550px)" srcSet={heroBookingTablet}/>
                <img className="hero-img rise-up delay-1" src={heroBookingMobile} alt="hero-bg"/>
            </picture>
        </div>
       
</header>
  )
}

export default ContactHero