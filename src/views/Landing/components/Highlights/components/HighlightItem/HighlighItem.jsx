import React from 'react'

const HighlighItem = ({item,isVisible}) => {
  return (
    <li className={isVisible ? `highlight-item fade-in ${item.imgDelay}` : "highlight-item"}>
      <div className="highlight-img-div">
              <picture className="highlight-picture">
                  <source media="(min-width:950px)" srcSet={item.img.desktop}/>
                  <source media="(min-width:550px)" srcSet={item.img.tablet}/>
                  <img className={isVisible ? "highlight-img scale-grow delay-1" : "highlight-img"} src={item.img.mobile} alt="hero-bg"/>
              </picture>
     </div>
      <div className="highlight-item-text-content">
        <h4>{item.name}</h4>
        <h5 className="thin mt-2 line-h-2">{item.blurb}</h5>
      </div>
    </li>
  )
}

export default HighlighItem