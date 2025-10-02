import React from 'react'
import { useEffect, useState } from 'react'
import { databases } from '../appwrite/config';
import { set } from 'react-hook-form';

function Notes() {

    const [notes, setNotes] = useState([]);

    useEffect(()=>{

        init();
    },[])

    const init = async() =>{

        try {

          const response = await databases.listDocuments(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID
        );

        // console.log(response);

        setNotes(response.documents);
          
        } catch (error) {

          console.log(error);
          
        }
    }

  return (
    <div>
      {notes.map((note, index)=>(

        <h1 key={index}>

          {note.email}
          {note.age}
        </h1>
      ))}
    </div>
  )
}

export default Notes
