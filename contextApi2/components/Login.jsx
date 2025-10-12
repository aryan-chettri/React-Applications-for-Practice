import React from 'react'
import { useContext } from 'react'
import UserContext from '../src/context/UserContext'
import { useState } from 'react'

const Login = () => {
 
    const [name, setName] = useState('');

    const [password, setPassword] = useState('');

    const {user, setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();

        setUser({name, password});
    }


  return (
    <div>
      <input type="text" name='name' value={name} placeholder='name' onChange={(e)=>setName(e.target.value)} />
      <br />
      <br />
      <input type="text" name='password' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
