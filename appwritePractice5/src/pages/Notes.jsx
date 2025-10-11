import React from 'react'
import db from '../appwrite/databases'
import { useState } from 'react'
import { useEffect } from 'react';
import NotesForm from '../components/NotesForm';
import { Query } from 'appwrite';

function Notes() {

    const [notes, setNotes] = useState([]);

    useEffect(()=>{

        init();
    },[])

    const init = async () =>{

        const response = await db.notes.list([Query.orderDesc("$createdAt")]);

        console.log(response);
        console.log(response.documents);
        setNotes(response.documents);
        console.log(notes);
    }
  return (
    <>
        <div>
            <h1>
                My name and age
            </h1>
        </div>

        <NotesForm setNotes={setNotes} />

        
            {
                notes.map((note,index)=>(
                    <h3 key={index}>
                        {note.Name}
                        <br />
                        {note.Age}
                    </h3>
                ))
            }
        
    </>
  )
}

export default Notes;
