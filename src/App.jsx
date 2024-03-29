import { useState } from 'react'
import { Landing,Contact } from './views'
import {Footer} from "./components"
import './App.css'

function App() {
  const [showContact,setShowContact] = useState(true);

  return (
    <div className="app">
      {showContact ? <Contact/> : <Landing setShowContact={setShowContact}/>}
      <Footer/>
    </div>
  )
}

export default App
