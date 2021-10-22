const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router();
const bcrypt=require('bcryptjs')
require('../database/conn')
const User=require('../model/userschema')
router.get('/',(req,res)=>{
   res.send('Hello world')
})
router.post('/register', async (req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body
    if( !name || !email || !phone || !work || !password || !cpassword)
    {
        res.status(422).json({error : "Please filled the "})
    }
    try{
    const userExist=await  User.findOne({email:email})
    if(userExist)
    {
        res.status(422).json({error : "emial aldreay exist "})
        console.log("User aldreay exits")
 
    }
    else{
    const user = new User(req.body)
    
    await  user.save()
    res.status(200).json({message:"User register successfully "})
    console.log("User register successfully")
    }
}
    catch(error)
    {
        res.status(500).json({error:"Something went rong"})
    }
   
 
})


router.post('/signin', async (req,res)=>{
    let token
    try{
       const {email,password}=req.body
       if(!email & !password)
       {
        return res.status(400).json({error:"please fill data"})  
       }
       if(!email)
       {
           return res.status(400).json({error:"please enter email"})
       }
       if(!password)
       {
           return res.status(400).json({error:"please enter password"})
       }
         else{
            
        const userLogin = await User.findOne({email:email})
       
        if(userLogin)
        {
            const isMatch=await bcrypt.compare(password,userLogin.password)
            token= await userLogin.generateAuthToken()
            console.log(token)
          
            if(!isMatch)
            {
                return res.status(400).json({error:"invalid credidential"})
    
            }
            else{
                console.log('Login suessfull')
                return res.status(200).json({message:"login suceess"})
              console.log(userLogin)
      
             }
        }
        else
        {
            return res.status(400).json({error:"invalid credidential"})
        }
       
        
        }
    
    }
    catch(err)
    {
     console.log(err)
    }
  
})
module.exports=router