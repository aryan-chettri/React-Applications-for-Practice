import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>

      <h1>The destiny is all good</h1>
      <Login/>
      <Logout/>
      <Profile/>


    </UserContextProvider>
  )
}

export default App
