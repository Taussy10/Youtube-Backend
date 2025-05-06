// To creat rouer we need to import router 
import {Router} from "express"

const commentsRouter  = Router()

// In commentsRouter we have route like: 
// add comment, delete comment , edit comment , get all comments


// add comments
commentsRouter.post("/comments",(req,res)=> (
 res.send({
message: "POST comments"    
 })
))


// we have to delete comment to get comment get id 
// so for that client have to write id as params
commentsRouter.delete("/delete-comment:id",(req,res)=> (
 res.send({
    message: "Comment has DELETED"    
 })
))


// edit comment 
commentsRouter.put("/edit-comment:id",(req,res)=> (
 res.send({
    message: "EDIT the comment"    
 })
))

// , get all comments

commentsRouter.get("/comments",(req,res)=> (
 res.send({
    message:"GET all the comments"    
 })
))

export default commentsRouter 

