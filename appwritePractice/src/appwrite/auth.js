import conf from "../conf/conf.js";
import {Client, Account, ID} from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor(){

        this.client
            .setProject(conf.appwriteProjectId)
            .setEndpoint(conf.appwriteUrl);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){

        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                //login method
            }

            else{
                return userAccount;
            }

            
        } catch (error) {
            console.log('Appwrite:: createAccount:: error', error);
        }
    }

    async login({email, password}){

        try {

            const user = await this.account.createEmailPasswordSession(email, password);

            return user;
            
        } catch (error) {

            console.log("Appwrite:: login:: error");
            
        }
    }

    async logout(){

        try {

            return await this.account.deleteSessions();
            
        } catch (error) {
            
            console.log("Appwrite error:: logout:: error::", error);
        }

        return null;
    }

    async getUser(){
        try {

            return await this.account.get();
            
        } catch (error) {
            
            console.log('Appwrite error:: getUser:: error:: ', error)
        }

        return null;
    }
   
}

const authService = new AuthService();

export default authService;