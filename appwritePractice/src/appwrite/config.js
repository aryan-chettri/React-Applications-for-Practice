import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage } from "appwrite";

export class Service{

    client = new Client();
    databases;
    storage;

    constructor(){

        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createFile({slug, title, content, featuredImage, status, userId}){

        try {

            return await this.storage.createFile(

                conf.appwriteBucketId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId,
                }
            )
            
        } catch (error) {
            
            console.log("Appwrite error :: createFile:: error::", error);
        }
    }


    async getFile(slug){
        try {

            return await this.storage.getFile(
                conf.appwriteBucketId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            
            console.log("Appwrite error:: getFile :: error", error);
        }
    }


    async updateFile(slug, {title, content, featuredImage, status}){

        try {

            return await this.storage.updateFile(

                conf.appwriteBucketId,
                conf.appwriteCollectionId,
                slug,
                {
                   title, content, featuredImage, status, 
                }

            )
            
        } catch (error) {
            
            console.log("Appwrite error:: updateFile:: error", error);
        }
    }

    async deleteFile(slug){
        try {

            await this.storage.deleteFile(

                conf.appwriteBucketId,
                conf.appwriteCollectionId,
                slug
            )

            return true
            
        } catch (error) {
            
            console.log("Appwrite error:: deleteFile:: error", error);

            return false
        }
    }

    async getFiles(){

    }
}

const service = new Service();

export default service;