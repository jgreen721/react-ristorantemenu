import { useState } from 'react'
import { Landing,Contact } from './views'
import {Footer} from "./components"
import './App.css'

function App() {
  const [showContact,setShowContact] = useState(false)

  return (
    <div className="app">
      {showContact ? <Contact/> : <Landing/>}
      <Footer/>
    </div>
  )
}

export default App
