const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
const users = require("./data.json")
app.get("/users",(req,res)=>{
 const token = req.headers.authorization
 jwt.verify(token, "cngvn",(err)=>{
    if(err){
        res.send("invalid token")
    }
 })
 if(token){
    res.send(users)
 }else{
    res.send("error")
 }
})
app.post("/login",(req,res)=>{
    const body = req.body
    const token = jwt.sign(body,"cngvn")
    res.send(token)
})
app.listen(8080,console.log("server running"))