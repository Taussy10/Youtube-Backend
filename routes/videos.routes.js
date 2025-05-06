// To creat rouer we need to import router 
import {Router} from "express"

const videosRouter = Router()

// In videosRouter we have route like: 
// upload video , update video , delete video , get all videos ,
//  get own videos(Based on the user) , get videos by id ,
//  get videos by category , get videos by tags

// Why post method ? Cause we want to 
// add something new in database 
videosRouter.post("/upload-video",(req,res)=> (
 res.send({
message: "Upload a video"    
 })
))

// why post cause we are not adding something database 
// cause user has already signed up
// cause by login we create session that's a new thing 

videosRouter.post("/update-video",(req,res)=> (
 res.send({
    message: "Update a video"    
 })
))

// why put ? cause we are doing some 
// chher khaani in already created resource that's why 

videosRouter.delete("/delete-video",(req,res)=> (
 res.send({
    message: "DELETE the video"    
 })
))

// GET all videos
videosRouter.get("/videos",(req,res)=> (
 res.send({
    message: "GET all videos"    
 })
))


// get own videos(Based on the user) 
// How to write this one
videosRouter.get("/videos",(req,res)=> (
   res.send({
      message: "GET all videos"    
   })
  ))

// , get videos by id ,
videosRouter.get("/videos:id",(req,res)=> (
 res.send({
    message: "GET videos by id"    
 })
))

//  GET videos by category 
videosRouter.get("/videos:category",(req,res)=> (
   res.send({
      message: "GET videos by category"    
   })
  ))

// get videos by tags
videosRouter.get("/videos:tags",(req,res)=> (
 res.send({
    message: "GET videos by tags"    
 })
))

export default videosRouter 

