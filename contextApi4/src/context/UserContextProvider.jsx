import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext.js'


const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (

    <UserContext.Provider value={{user, setUser, username, setUsername, password, setPassword}}>
        {children}
    </UserContext.Provider>
    
  )
}

export default UserContextProvider
