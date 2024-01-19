import React, {useRef} from 'react'
import {HighlightItem} from "./components"
import {filetMignonDesktop, filetMignonTablet,filetMignonMobile, searedSalmonDesktop,searedSalmonTablet,searedSalmonMobile,chocolateMousseDesktop,chocolateMousseTablet,chocolateMousseMobile, patternDivide} from "../../../../const"
import {useObserver} from "../../../../useObserver"
import "./Highlights.css"
const Highlights = () => {
    const elRef = useRef();
    const {isVisible} = useObserver(elRef)
    const items = [
        {id:1,name:"Seared Salmon Fillet",blurb:"Our locally sourced salmon served with a refreshing buckwheat summer salad.",img:{desktop:searedSalmonDesktop,tablet:searedSalmonTablet,mobile:searedSalmonMobile},delay:"delay-1",imgDelay:"delay-2"},
        {id:2,name:"Rosemary Filet Mignon",blurb:"Our prime beef served to your taste with a delicious choice of seasonal sides.",img:{desktop:filetMignonDesktop,tablet:filetMignonTablet,mobile:filetMignonMobile},delay:"delay-2",imgDelay:"delay-3"},
        {id:3,name:"Summer Fruit Chocolate Mousse",blurb:"  Creamy mousse combined with summer fruits and dark chocolate shavings.",img:{desktop:chocolateMousseDesktop,tablet:chocolateMousseTablet,mobile:chocolateMousseMobile},delay:"delay-3",imgDelay:"delay-4"},
    ]

    console.log("isVisible",isVisible)
  return (
    <div ref={elRef} className="highlights-container">
        <div className="highlights-content-row">
            <div className="highlights-column">
                <div className={isVisible ? "highlights-header-card fade-in delay-1" : "highlights-header-card"}>
                    <img src={patternDivide} alt="" />
                    <h2 className="my-2 mid-thin">A few highlights from our menu</h2>
                    <h5 className="thin line-h-2">  We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. 
  Our menu is revamped every season.</h5>
                </div>
            </div>
            <div className="highlights-column">
                <ul className="highlights">
{items.map(item=>(
    <HighlightItem isVisible={isVisible} key={item.id} item={item}/>
))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Highlights