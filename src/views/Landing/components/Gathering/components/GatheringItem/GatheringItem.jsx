import React from 'react'

const GatheringItem = ({text,counter,val,setCounter}) => {
  return (
    <li className={counter == val ? "gathering-item highlight-gathering-item" : "gathering-item"}>
      <button onClick={()=>setCounter(val)} className="no-btn">
      <h4 className={counter == val ? "mid-thin gathering-item-text" : "mid-thin gathering-item-text muted"}>{text}</h4>
      </button>
    </li>
  )
}

export default GatheringItem