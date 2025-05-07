// To creat rouer we need to import router 
import {Router} from "express"
import bcrypt from "bcrypt"
import mongoose from "mongoose"
import userModel from "../models/user.model.js"
import cloudinary from "../config/cloudinary.js"


const userRouter = Router()
// Btw you also write this then you have to import express
// const  userRoute  r = express.Router()

// In userRouter we route like: 
// sign-up , login , update-profile , subscribe 

// Why post method ? Cause we want to 
// add something new in database 
userRouter.post("/signup",async(req,res)=> { 
   // now need to uplod image on cloudniary
   // need to make it asyn casue it takes time to upload things 
   // when you talk oter's server we have to deal in promises 
   // cause servers can take time 

try {
  
   // user will give(we will request that's why used req) password and that will be hashed
   const hashed = await bcrypt.hash(req.body.password , 10)
   // const hashed =  req.body.password
   // for some reason I'm getting undeined hashed value 

   console.log("Hashed password :", hashed)
   // now upload file this function take take image path 
   const uploadImage = await cloudinary.uploader.upload(req.files.logoUrl.tempFilePath);
console.log("UploadImage from user.routes :",uploadImage);
// then create a new user
console.log("Channelname :",req.body.channelName);

const newUser = new userModel({
   _id: new mongoose.Types.ObjectId(),
   // Why req ? cause client has to take some action send some data 
   channelName: req.body.channelName,
   email: req.body.email,
   phone: req.body.phone,
   password: hashed, //whatever the password it will get converted in hash and 
   // that we are gonna store we want to store hashed password
   // password: req.body.password,
   // why await cause these thing will be promise so have to resolved it
   logoUrl: (await uploadImage).secure_url,
   // logoUrl: req.body.logoUrl,
   logoId: (await uploadImage).public_id,
   // logoId: req.body.logoId
// but whre is  subscriber , subscribed channel
}) 

let user = await newUser.save()
// then send the user
// 201 status code means the new user has created  

// why res ? cause server will give response of user object
res.status(201).json({
   user
})

} catch (error) {
   console.error("Error from signup",error);
   // throw new Error("Failed to upload image on cloudniary")
   res.status(500)
   .json({error: "Something went wrong", message: error.message})
   // .json({error: "Something went wrong", message: req.body.channelName,})
   
}


})

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

