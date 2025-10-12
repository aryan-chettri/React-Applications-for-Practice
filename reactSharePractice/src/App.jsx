import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {EmailIcon, InstapaperIcon, FacebookIcon} from "react-share"

import {FacebookShareButton} from "react-share";

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <h1>This is the sharing page</h1>

      <FacebookShareButton
        body= "The destiny of a king"
        children = "The destiny of a king as sought by the souldier"

        quote = "The time when it all started"

        text = "This is the day where it all ended"
        
        url = "www.github.com/aryan-chettri"
      >

          <FacebookIcon round={true}/>


      </FacebookShareButton>
   </>
  )
}

export default App
