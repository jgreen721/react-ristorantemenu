import React from 'react'
import {filetMignonDesktop, filetMignonTablet,filetMignonMobile, searedSalmonDesktop,searedSalmonTablet,searedSalmonMobile,chocolateMousseDesktop,chocolateMousseTablet,chocolateMousseMobile, patternDivide} from "../../../../const"

const Highlights = () => {
    const items = [
        {id:1,name:"Seared Salmon Fillet",blurb:"Our locally sourced salmon served with a refreshing buckwheat summer salad.",img:{desktop:searedSalmonDesktop,tablet:searedSalmonTablet,mobile:searedSalmonMobile}},
        {id:2,name:"Rosemary Filet Mignon",blurb:"Our prime beef served to your taste with a delicious choice of seasonal sides.",img:{desktop:filetMignonDesktop,tablet:filetMignonTablet,mobile:filetMignonMobile}},
        {id:3,name:"Summer Fruit Chocolate Mousse",blurb:"  Creamy mousse combined with summer fruits and dark chocolate shavings.",img:{desktop:chocolateMousseDesktop,tablet:chocolateMousseTablet,mobile:chocolateMousseMobile}},
    ]
  return (
    <div className="highlights-container">
        <div className="highlights-content-row">
            <div className="highlights-column">
                <div className="highlights-header-card">
                    <img src={patternDivide} alt="" />
                    <h1>A few highlights from our menu</h1>
                    <h5>  We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. 
  Our menu is revamped every season.</h5>
                </div>
            </div>
            <div className="highlights-column"></div>
        </div>
    </div>
  )
}

export default Highlights