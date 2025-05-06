// To creat rouer we need to import router 
import {Router} from "express"

const userRouter = Router()

// In userRouter we route like: 
// sign-up , login , update-profile , subscribe 

// Why post method ? Cause we want to 
// add something new in database 
userRouter.post("/sign-up",(req,res)=> (
 res.send({
message: "User has signed up"    
 })
))

// why post cause we are not adding something database 
// cause user has already signed up
// cause by login we create session that's a new thing 

userRouter.post("/login",(req,res)=> (
 res.send({
    message: "User has login"    
 })
))

// why put ? cause we are doing some 
// chher khaani in already created resource that's why 

userRouter.put("/update-profile",(req,res)=> (
 res.send({
    message: "User has updated profile"    
 })
))

// why Post ? cause user have to add something in new databse ?
// what is gonna add ? user's subscribed channel id gonna 
// add in user's databse

userRouter.post("/subscribe",(req,res)=> (
 res.send({
    message:"User has subscribe"    
 })
))

export default userRouter

