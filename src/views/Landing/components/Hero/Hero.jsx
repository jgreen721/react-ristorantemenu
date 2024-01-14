import React from 'react'
import { logoIcon, heroDesktop, heroTablet, heroMobile } from '../../../../const'
import "./Hero.css"

const Hero = () => {
  return (
    <header className="hero">
         <div className="desktop-hero hero-content-column">
            <div className="logo-div">
                <img className="logo-icon" src={logoIcon} alt="" />
            </div>
            <div className="hero-content-card">
             <h1 className="thin hero-header slide-right delay-1">Exquisite dining since 1989</h1>
            <h5 className="thin my-2 line-h-2 hero-blurb slide-right delay-2">  Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
                  the comfort of our farmhouse.
            </h5>
            <button className="btn transparent-btn rise-up delay-3">Book a table</button>
            </div> 
        </div> 
        <div className="hero-img-column">
            <picture>
                <source media="(min-width:950px)" srcSet={heroDesktop}/>
                <source media="(min-width:550px)" srcSet={heroTablet}/>
                <img className="hero-img rise-up delay-1" src={heroMobile} alt="hero-bg"/>
            </picture>
        </div>
        <div className="mobile-hero hero-content-column">
            <div className="logo-div">
                <img className="logo-icon" src={logoIcon} alt="" />
            </div>
            <div className="hero-content-card">
             <h1 className="thin hero-header slide-right delay-1">Exquisite dining since 1989</h1>
            <h5 className="thin my-2 line-h-2 hero-blurb slide-right delay-2">  Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
                  the comfort of our farmhouse.
            </h5>
            <button className="btn transparent-btn rise-up delay-3">Book a table</button>
            </div> 
        </div>
    </header>
  )
}

export default Hero