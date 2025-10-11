import React from 'react'
import db from '../appwrite/databases'
import { useState } from 'react';

function NotesForm({ setNotes }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleAdd = async (e) =>{

        e.preventDefault();

        const noteName = name;

        console.log(noteName);

        const noteAge = age;

        console.log(noteAge);
        

        if(noteName === "" & noteAge === 0) return console.log("error");

        try {

            const payload = {Name: noteName, Age: Number(noteAge)};

            console.log(payload)

            const response = await db.notes.create(payload);

            console.log(response.message);

            setNotes((prevState) => [response, ...prevState]);

            
            
        } catch (error) {
            
            console.log(error);
        }

    }

  return (
    <>
    
    <div>

        <input type="text" 
            name='name'
            placeholder='Name of the User'
            onChange={(e)=>setName(e.target.value)}
        />
        
        <input type="number" 
                name='age'
                placeholder='Age of the User'
                onChange={(e)=>setAge(e.target.value)}
        />

        <button onClick={handleAdd}> Submit</button>
    </div>
    </>
  )
}

export default NotesForm;
