import React, {useState} from 'react'
import { familyGatheredDesktop,familyGatheredTablet,familyGatheredMobile, socialEventsDesktop,socialEventsTablet,socialEventsMobile, specialEventsDesktop,specialEventsTablet,specialEventsMobile,patternLines,curveBottomLeft } from '../../../../const'
import "./Gathering.css";
import {GatheringItem} from "./components"


const Gathering = () => {
  const gatherings = [
    {id:1,title:"Family Gathering", blurb:"We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",imgs:{desktop:familyGatheredDesktop,tablet:familyGatheredTablet,mobile:familyGatheredMobile}},
    {id:2,title:"Special Events", blurb:"Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",imgs:{desktop:socialEventsDesktop,tablet:socialEventsTablet,mobile:socialEventsMobile}},
    {id:3,title:"Social Events", blurb:"Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",imgs:{desktop:specialEventsDesktop,tablet:specialEventsTablet,mobile:specialEventsMobile}},
  ]

  const [counter,setCounter] = useState(0)



  return (
    <div className="gathering-parent">
          <div className="gathering-overlay-container">
                <img className="svg-pattern flip-svg" src={curveBottomLeft} alt="" />
                <div className="lines-container">
                  <img src={patternLines} alt="" />
                </div>
          </div>
      <div className="gathering-column">
          <div className="img-container">
              <picture>
                  <source media="(min-width:950px)" srcSet={gatherings[counter].imgs.desktop}/>
                  <source media="(min-width:550px)" srcSet={gatherings[counter].imgs.tablet}/>
                  <img className="gathering-img rise-up delay-1" src={gatherings[counter].imgs.mobile} alt="hero-bg"/>
              </picture>
          </div>
        </div>
        <div className="gathering-column">
          <div className="gathering-content-card">
            <h2>{gatherings[counter].title}</h2>
            <h5 className="thin my-2 line-h-2">{gatherings[counter].blurb}</h5>
            <button className="btn primary-btn">Book a Table</button>
            <ul className="option-btns">
              {gatherings.map((g,idx)=>(
                <GatheringItem val={idx} counter={counter} setCounter={setCounter} text={g.title} key={g.id}/>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Gathering