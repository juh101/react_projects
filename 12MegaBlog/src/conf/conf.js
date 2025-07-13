const config = {
    appwiteURL: String(import.meta.env.VITE_APPWRITE_URL) || "https://fra.cloud.appwrite.io/v1",
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID) || "68724d3b002f7590ff25",
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID) || "68724e31002b2683193e",
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID) || "68738d4e003792ac6c79",
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID) || "6873a118002227c6b7e7"     
    
}

export default config