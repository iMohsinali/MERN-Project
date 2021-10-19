const mongoose=require('mongoose')
const express=require('express')
const app=express()
const db='mongodb+srv://mohsin:mohsin@cluster0.sh635.mongodb.net/mernstack?retryWrites=true&w=majority'
 mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
 }).then(()=>
 console.log("conneted to the database"))
 .catch((err)=>{
     console.log("no connection")
 })
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

app.listen(3000,()=>
{
    console.log(`coonceting to port 3000`)
})