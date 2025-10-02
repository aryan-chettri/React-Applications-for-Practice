import React from 'react'
import {ID} from 'appwrite'
import { databases } from './config.js'
import { data } from 'react-router-dom'

const collections = [
    {
        'databaseId': import.meta.env.VITE_DATABASE_ID,
        'id': import.meta.env.VITE_COLLECTION_ID,
        'name': 'names'
    }
]

const db = {}

collections.forEach(col => {

    db[col.name] = {

        create: (payload, id = ID.unique()) => databases.createDocument(
            col.databaseId,
            col.id,
            id,
            payload
        ),

        update: (id, payload) => databases.updateDocument(

            col.databaseId,
            col.id,
            id,
            payload
        ),

        get: (id) => databases.getDocument(
            col.databaseId,
            col.id,
            id,
        ),
        delete: (id) => databases.deleteDocument(
            col.databaseId,
            col.id,
            id,
        ),
        

        list: (queries)=> databases.listDocuments(
        col.databaseId,
        col.id,
        queries
    )

    }
})


export {db};
