import express from "express"
import 'dotenv/config'
import userRouter from "./routes/users.routes.js";
import { connectToDb } from "./database/monodb.js";

// intiate the app 
const app = express()



// user routes
// Always write user rotues in plural 
// not user it's should be users
// He is saying it middlewares 
// it's a base url  
app.use('/api/v1/users', userRouter)


// for parsing application/json basically into JSOn 
app.use(express.json()); 

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
await connectToDb()

    
}
        
)
