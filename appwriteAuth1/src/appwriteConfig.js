import {Client, Account} from 'appwrite';

export const API_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';

export const PROJECT_ID = '68b45c18001a2a4b9228';

const client = new Client()
        .setEndpoint(API_ENDPOINT)
        .setProject(PROJECT_ID);

export const account = new Account(client);

export default client;