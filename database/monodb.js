import mongoose from "mongoose";

// This file is for connecting mongoDB with Server
// Connect MonoDB to the server
export const connectToDb = async() => {
    try {
        // function connect(uri: string, options?: mongoose.ConnectOptions):
        //  Promise<mongoose.Mongoose>
        // It's a function that takes a URL and 
        // returns a promise(so we have to create a function async)
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
     console.log("Failed to connect with mongoDB :",error);
        throw new Error("Failed to connect with mongoDB", error)
    }
}