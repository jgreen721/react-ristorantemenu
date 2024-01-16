import React, {useRef} from 'react'
import { patternDivide, patternLines } from '../../../../const'
import {useObserver} from "../../../../useObserver"
import "./SectionRow.css"

const SectionRow = ({section}) => {
    const elRef = useRef();
    const {isVisible} = useObserver(elRef)
  return (
    <section ref={elRef} className={`${section.className} section-row`}>
        <div className="section-desktop-row">
        {section.imgFirst &&
         <div className="section-column">
            <div className="section-svg-overlay center-start">
                <img className="section-svg flip-svg" src={section.svgPattern} alt="" />
            </div>
            <div className="section-img-container">
            <picture>
                <source media="(min-width:950px)" srcSet={section.img.desktop}/>
                <source media="(min-width:550px)" srcSet={section.img.tablet}/>
                <img className="section-img scale-grow" src={section.img.mobile} alt="section-img"/>
            </picture>
            </div>
        </div> 
        }


        <div className="section-column">
            <div className="section-content-card">
            <img className="pattern-img slide-right delay-1" src={patternDivide} alt="" />

                <h2 className={isVisible ? "my-2 slide-right delay-2" : "my-2 pre-animate-left"}>{section.title}</h2>
                <h5 className={isVisible ? "mid-thin line-h-2 slide-right delay-3" : "my-2 pre-animate-left"}>{section.blurb} </h5>

            </div>
        </div> 


        {!section.imgFirst &&
         <div className="section-column relative">
            
            <div className="section-svg-overlay bottom-end">
                <img className="section-svg" src={section.svgPattern} alt="" />
            </div>
            <div className="section-img-container">
            <picture>
                <source media="(min-width:950px)" srcSet={section.img.desktop}/>
                <source media="(min-width:550px)" srcSet={section.img.tablet}/>
                <img className={isVisible ? "section-img scale-grow" : "section-img pre-animate-shrink"} src={section.img.mobile} alt="section-img"/>
            </picture>
            </div>
            <img className="lines-icon" src={patternLines} alt="" />
        </div> 
        }
        </div>
        <div className="mobile-section">
            <div className="mobile-img-div">
            <picture>
                <source media="(min-width:950px)" srcSet={section.img.desktop}/>
                <source media="(min-width:550px)" srcSet={section.img.tablet}/>
                <img className="section-img" src={section.img.mobile} alt="section-img"/>
            </picture>            
            </div>
            <div className="mobile-content-card">
                <img className="pattern-img" src={patternDivide} alt="" />
            <h2 className="py-4">{section.title}</h2>
            <h5 className="mid-thin line-h-2">{section.blurb}</h5>
            </div>
        </div>
    </section>
  )
}

export default SectionRow