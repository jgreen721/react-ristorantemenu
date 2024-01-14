import React from 'react'
import { Hero,Highlights,ReservationsRow, SectionRow } from './components'
import { enjoyableDesktop, enjoyableTablet, enjoyableMobile, locallySourcedDesktop, locallySourcedTablet, locallySourcedMobile, curveBottomLeft, curveBottomRight, patternDivide } from '../../const'
import "./Landing.css"

const Landing = () => {
  const sectionData=[
    {id:1,title:"Enjoyable place for all the family",blurb:"Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",img:{desktop:enjoyableDesktop,tablet:enjoyableTablet,mobile:enjoyableMobile},imgFirst:true, svgPattern:curveBottomRight,className:"section-up",animation:"slide-right"},
    {id:2,title:"The most locally sourced food",blurb:"All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food",img:{desktop:locallySourcedDesktop,tablet:locallySourcedTablet,mobile:locallySourcedMobile},imgFirst:false, svgPattern:curveBottomLeft,className:"section-down",animation:"slide-left"},
  ]
  return (
    <div className="view-container">
      <Hero/>
      {/* <SectionRow/> */}
      {sectionData.map(section=>(
        <SectionRow section={section} key={section.id}/>
      ))}
      <Highlights/>
        <ReservationsRow/>
    </div>
  )
}

export default Landing