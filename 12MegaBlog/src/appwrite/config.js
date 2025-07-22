import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query, ImageGravity, ImageFormat } from "appwrite";
import { Permission, Role } from "appwrite";


export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        const storage = new Storage(this.client);
    }
    async createPost({ title, slug, content, status, image, userId }) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    image,
                    userId
                },
               
            );
            console.log("Post created successfully:", response);

            return response;

        } catch (error) {
            console.log("Error creating post:", error);
        }
    }

    async updatePost(slug, { title, content, status, image }) {
        try {
            const response = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    image
                }
            );
            return response;

        } catch (error) {
            console.log("Error updating post:", error);
        }
    }

    async deleteDocument(slug) {
        try {
            const response = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Error deleting document:", error);
        }
    }

    async getPost(slug) {
        try {
            const response = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return response;
        } catch (error) {
            console.log("Error fetching post:", error);
        }
    }

    async getPosts(query = [Query.equal("status", "active")]) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query
            );
            return response.documents; // array of response objects
        } catch (error) {
            console.log("Error fetching posts:", error);
        }
    }

    async uploadImage(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [Permission.read(Role.any())]
            );
            console.log("Image uploaded successfully:", response);
            return response;
        } catch (error) {
            console.log("Error uploading image:", error);
        }
    }

    async deleteImage(fileId) {
        try {
            const response = await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            console.log("File deleted:", response);
            return true;
        } catch (error) {
            console.log("Error deleting image:", error);
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId,
            0,          // width (0 = original)
            0,          // height (0 = original)
            undefined,  // gravity
            undefined,
        );
    }

    downloadFile(fileId) {
        return this.bucket.getFileDownload(
            conf.appwriteBucketId,
            fileId
        );
    }
}

const service = new Service();
export default service;