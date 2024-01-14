import React from 'react'

const HighlighItem = ({item,isVisible}) => {
  return (
    <li className={isVisible ? "highligh-item" : "highlight-item"}>
      <div className="highlight-img-div">
        <picture>
          <img src={item.img.desktop}/>
        </picture>
      </div>
      <div className="highlight-item-text-content">
        <h4>{item.name}</h4>
        <h5>{item.blurb}</h5>
      </div>
    </li>
  )
}

export default HighlighItem