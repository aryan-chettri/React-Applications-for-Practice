import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Logout from '../components/Logout'

const App1 = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


  return (
    <UserContextProvider>
        <h1>React Login Page</h1>
        <Login/>
        <Profile/>
        <Logout />
    </UserContextProvider>
  )
}

export default App1
