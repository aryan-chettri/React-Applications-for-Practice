import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Notes from './pages/Notes'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Notes/>} path='/'/>
        {/* <Route element={} path = '/login'/> */}
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
