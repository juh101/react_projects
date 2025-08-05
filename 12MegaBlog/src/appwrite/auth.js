import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL) //Appwrite Endpoint
            .setProject(conf.appwriteProjectId); //Appwrite Project ID
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const response = await this.account.create(ID.unique(), email, password, name);
            if (response) {
                console.log("Account created successfully:", response);
                return this.login({ email, password }); // Automatically log in after account creation
            }
            else {
                return response;
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }
    sessionId;

    async login({ email, password }) {
        try {
            const response = await this.account.createEmailPasswordSession(email, password);
            if (response) {
                console.log("Login successful:", response);
                this.sessionId = response.$id; // Store session ID
                console.log("Session ID:", this.sessionId);
                return response;
            }
            else {
                return response;
            }
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }
    async getCurrentUser() {
            try {
                const user = await this.account.get();
                console.log("Current user:", user);
                return user;
            } catch (error) {
                if (error.code === 401) {
                    return null;
                }
                console.error("Unexpected error getting current user:", error);
                return null;
            }
        }
    async logout() {
            try {
                await this.account.deleteSession('current');
                // console.log(resp);
                
            } catch (error) {
                console.error("Error logging out:", error);
                throw error;
            }
        }
    }

    /* 
    In JavaScript, most things that interact with the outside world 
    (like a server or database) return a Promise.
    async + await lets us wait for those Promises to resolve, 
    without blocking the rest of the app. */

    const authService = new AuthService();

export default authService;