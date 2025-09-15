import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68b45c18001a2a4b9228'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
