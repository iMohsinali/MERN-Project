const dotenv=require('dotenv')

const mongoose=require('mongoose')
const express=require('express')

const app=express()

dotenv.config({path:'./config.env'})
require('./database/conn')
const User=require('./model/userschema')
const port=process.env.PORT

 
 const middleware=(req,res,next)=>{
     console.log('hello my midddlewaew')
     next()
 }
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/about',middleware,(req,res)=>{
    res.send('About me')
})

app.listen(port,()=>
{
    console.log(`coonceting to port ${port}`)
})