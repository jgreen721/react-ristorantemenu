import React, {useRef} from 'react'
import { useObserver } from '../../../../useObserver';
import "./ReservationsRow.css"

const ReservationsRow = () => {
  const elRef = useRef();
  const {isVisible} = useObserver(elRef)
  return (
    <section ref={elRef} className="reservations-row">
      <div className="section-content">
        <h2 className={isVisible ? "slide-right delay-3" : "pre-animate-right"}>Ready to make a reservation?</h2>
        <button className={isVisible ? "btn transparent-btn rise-up delay-1" : "pre-animate-lower"}>Book a table</button>
      </div>
    </section>
  )
}

export default ReservationsRow