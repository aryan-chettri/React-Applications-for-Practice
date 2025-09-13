import {Client,   Account, Databases,} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68b45c18001a2a4b9228');

export const account = new Account(client);
// export const tablesDB = new TablesDB(client);
export const databases = new Databases(client);