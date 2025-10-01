import React from 'react'

import { db } from "../appwrite/practice.js";

function App1() {

    const init = async() =>{

        try {

            const response = await db.names.list();

            console.log(response);
            
        } catch (error) {
            console.log(error);
        }

    
}

init();

  return (

    <div>
        
      <h1>Practice Page</h1>
    </div>
  )
}

export default App1



