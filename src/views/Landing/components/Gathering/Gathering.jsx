import React, {useState, useRef} from 'react'
import { familyGatheredDesktop,familyGatheredTablet,familyGatheredMobile, socialEventsDesktop,socialEventsTablet,socialEventsMobile, specialEventsDesktop,specialEventsTablet,specialEventsMobile,patternLines,curveBottomLeft } from '../../../../const'
import "./Gathering.css";
import {GatheringItem} from "./components"
import { useObserver } from '../../../../useObserver';


const Gathering = ({setShowContact}) => {
  const elRef = useRef();
  const {isVisible} = useObserver(elRef)
  const gatherings = [
    {id:1,title:"Family Gathering", blurb:"We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",imgs:{desktop:familyGatheredDesktop,tablet:familyGatheredTablet,mobile:familyGatheredMobile},delay:"delay-1"},
    {id:2,title:"Special Events", blurb:"Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",imgs:{desktop:socialEventsDesktop,tablet:socialEventsTablet,mobile:socialEventsMobile},delay:"delay-2"},
    {id:3,title:"Social Events", blurb:"Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",imgs:{desktop:specialEventsDesktop,tablet:specialEventsTablet,mobile:specialEventsMobile},delay:"delay-3"},
  ]

  const [counter,setCounter] = useState(0)


  const handleChangeCounter=(newCounter)=>{
    setCounter(newCounter)
  }



  return (
    <div ref={elRef} className="gathering-parent">
          <div className="gathering-overlay-container">
                <img className="svg-pattern flip-svg" src={curveBottomLeft} alt="" />
                <div className="lines-container">
                  <img src={patternLines} alt="" />
                </div>
          </div>
      <div className="gathering-column">
         <div className="img-column">
          <div className="img-container-row">
            
            {gatherings.map(gatheringItem=>(
             <li className="gathering-picture-item" style={{transform:`translateX(${-100 * counter}%)`}} key={gatheringItem.id}>
              <picture className="gathering-picture">
                  <source media="(min-width:950px)" srcSet={gatheringItem.imgs.desktop}/>
                  <source media="(min-width:550px)" srcSet={gatheringItem.imgs.tablet}/>
                  <img className={isVisible ? "gathering-img scale-grow delay-1" : "gathering-img"} src={gatheringItem.imgs.mobile} alt="hero-bg"/>
              </picture>
               </li>
              ))}  
            </div>
           
          </div> 
        </div>
        <div className="gathering-column">
          <div className="gathering-content-card">
            <div className="gathering-content-row">
            {gatherings.map(gatheringItem=>(
              <li key={gatheringItem.id} style={{transform:`translateX(${-100 * counter}%`}} className="gathering-content-item">
                <h2 className={isVisible ? "slide-right delay-1" : ""}>{gatheringItem.title}</h2>
                <h5 className={isVisible ? "thin my-2 line-h-2 slide-right delay-2" : ""}>{gatheringItem.blurb}</h5>
              </li>
            ))}
            </div>
            <button onClick={()=>setShowContact(true)} className="btn primary-btn scale-grow">Book a Table</button>
            <ul className="option-btns">
              {gatherings.map((g,idx)=>(
                <GatheringItem delay={g.delay} isVisible={isVisible} val={idx} counter={counter} setCounter={handleChangeCounter} text={g.title} key={g.id}/>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Gathering