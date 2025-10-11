import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {EmailIcon, InstapaperIcon} from "react-share"

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <EmailIcon size={100} round={true}/>

      <InstapaperIcon size={100} round={true}/>
   </>
  )
}

export default App
