import express from "express"
import 'dotenv/config'
import userRouter from "./routes/users.routes.js";
import { connectToDb } from "./database/monodb.js";
import cloudinary from "./config/cloudinary.js";
// when user will upload file then for the time file is uploaded 
// this will put file here in code 
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";

// intiate the app 
const app = express()

// have to write here middlewares
// / Don't know waht's the use
app.use(bodyParser.json())
// you can also try this 
// for parsing application/json basically into JSOn 
// it won't work for formdata 
// app.use(express.json()); 

// for file upload
app.use(fileUpload({
    // for sometime file will store hree till it reaches to cloudniary
    useTempFiles: true,
    tempFileDir: "/temp/"
}))


// user routes
// Always write user rotues in plural 
// not user it's should be users
// He is saying it middlewares 
// it's a base url  
app.use('/api/v1/users', userRouter)

/



// Intialize the server
app.get("/", (req, res) => (
    // you have to send it to start server
    // show somethng on browser 
 res.send("Server")
))

// Listen to the server
// (method )Application<Record<string, any>>.listen(
//     port: number, hostname: string, backlog: number,
//  callback?: (error?: Error) => void):
// so this is a method will take port as number ,
//  hostname callback
// you don't have to return this 
// make it async for time if it's take 
// Then who will resolve it cause by async it become promise

const PORT = process.env.PORT
app.listen(PORT, async() => {
// console.log("URI :",process.env.MONGODB_URI);

    console.log(`Server is running on http://localhost:${PORT}`)
// When server start then connect with monogoDB   
// why awiat cause this function returns a promise
// BTW you can aslo write this function below 
// where you intialize express
await connectToDb()

    
}
        
)
