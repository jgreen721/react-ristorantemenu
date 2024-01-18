import React from 'react'

const GatheringItem = ({text,counter,val,setCounter,delay,isVisible}) => {
  return (
    <li className={isVisible ? `gathering-item drop-down ${delay}` : `gathering-item`}>
      <button onClick={()=>setCounter(val)} className={counter == val ? "no-btn highlight-gathering-item" : "no-btn"}>
      <h4 className={counter == val ? "mid-thin gathering-item-text" : "mid-thin gathering-item-text muted"}>{text}</h4>
      </button>
    </li>
  )
}

export default GatheringItem