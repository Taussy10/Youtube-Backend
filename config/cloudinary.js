// import cloudinary from "cloudinary"
import { v2 as cloudinary } from "cloudinary"
import { config } from "dotenv";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:  process.env.CLOUDINARY_API_KEY ,
    api_secret:  process.env.CLOUDINARY_API_SECRET,
    // Return "https" URLs by setting secure: true
    secure: true

})


// For executing this command use this: either in app.js 
// below the express intiae in the app.listenr server just like connectToDB
config()
// console.log("Cloduniary config from cloudniary.js",cloudinary.config());


// we are exporting file 
export default cloudinary; 