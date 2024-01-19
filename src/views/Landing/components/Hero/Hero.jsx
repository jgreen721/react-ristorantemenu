import React from 'react'
import { logoIcon, heroDesktop, heroTablet, heroMobile } from '../../../../const'
import "./Hero.css"

const Hero = ({setShowContact}) => {
  return (
    <header className="hero">
         <div className="desktop-hero-content-column hero-content-column desktop">
            <div className="logo-div">
                <img className="logo-icon" src={logoIcon} alt="" />
            </div>
            <div className="hero-content-card">
                <h1 className="thin hero-header slide-right delay-1"><span className="animate-italic delay-3">Exquisite</span> dining since 1989</h1>
                <h5 className="thin my-2 line-h-2 hero-blurb slide-right delay-2">  
                Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
                </h5>
                <button onClick={()=>setShowContact(true)} className="btn transparent-btn rise-up delay-3">Book a table</button>
            </div> 
        </div> 
        <div className="hero-img-column">
            <picture>
                <source media="(min-width:950px)" srcSet={heroDesktop}/>
                <source media="(min-width:550px)" srcSet={heroTablet}/>
                <img className="hero-img rise-up delay-1" src={heroMobile} alt="hero-bg"/>
            </picture>
        </div>
         <div className="mobile-hero-content-column mobile">
            <div className="logo-div">
                <img className="logo-icon" src={logoIcon} alt="" />
            </div>
            <div className="hero-content-card">
             <h1 className="thin hero-header slide-right delay-1"><span className="animate-italic delay-3">Exquisite</span> dining since 1989</h1>
            <h5 className="thin my-2 line-h-2 hero-blurb slide-right delay-2">  Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
                  the comfort of our farmhouse.
            </h5>
            <button onClick={()=>setShowContact(true)} className="btn transparent-btn rise-up delay-3">Book a table</button>
            </div> 
        </div> 
    </header>
  )
}

export default Hero