import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrivateRoutes from './utils/PrivateRoutes'
import { Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import { AuthProvider } from './utils/AuthContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>

      <AuthProvider>

      <Routes>

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>

        </Route>
      </Routes>

      </AuthProvider>

    </Router>
  )
}

export default App
