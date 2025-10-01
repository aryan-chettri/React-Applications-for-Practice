import React from 'react'
import {ID} from 'appwrite'
import { databases } from './config.js'

const collections = [
    {
        'databaseId': import.meta.env.VITE_DATABASE_ID,
        'id': import.meta.env.VITE_COLLECTION_ID,
        'name': 'names'
    }
]

const db = {}

db[collections[0].name] = {

    list: (queries)=> databases.listDocuments(
        collections[0].databaseId,
        collections[0].id,
        queries
    )
}

export {db};
