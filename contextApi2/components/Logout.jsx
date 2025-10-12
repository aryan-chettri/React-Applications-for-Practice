import React from 'react'
import { useContext } from 'react'
import UserContext from '../src/context/UserContext'
import Login from './Login'

const Logout = () => {

   

    const {user, setUser} = useContext(UserContext);

    const handleLogout = () =>{

        setUser(null);
        
    }

  return (

    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
