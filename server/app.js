const dotenv=require('dotenv')

const mongoose=require('mongoose')
const express=require('express')

const app=express()
app.use(express.json())
dotenv.config({path:'./config.env'})
require('./database/conn')
const User=require('./model/userschema')
const port=process.env.PORT
app.use(require('./router/auth'))

app.listen(port,()=>
{
    console.log(`coonceting to port ${port}`)
})