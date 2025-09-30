import React from 'react'

import { useState, useEffect } from 'react'

import { databases } from '../appwrite/config.js'


function Home() {

    const [array, setArray] = useState([]);

    useEffect(()=>{
        init();
    },[])

    const init = async() =>{

        try {

            const data = await databases.listDocuments(

            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID
        );

        setArray(data.documents);

        console.log(data.documents);
            
        } catch (error) {


            console.log("Init error:", error);
        }
    }

  return (
    <div>
      {array.map((element, index)=>(

        <h1 key={index}>

          {element.email}
          {element.age}
        </h1>
      ))}
    </div>
  )
}

export default Home
