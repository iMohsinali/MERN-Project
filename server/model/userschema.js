const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

var userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            require:true

        }
    }]
})
//hashing password
userschema.pre('save', async function(next) {
    
    console.log('just before saving');
    const rounds = 10;

    const hash = await bcrypt.hash(this.password, rounds);
    const has = await bcrypt.hash(this.cpassword, rounds);
  
    
    this.password = hash;
    this.cpassword=has
    next();
});

    userschema.methods.generateAuthToken = async function(){
        try{
            let token = jwt.sign({_id:this._id},process.env.SECRECT_KEY)
            this.tokens = this.tokens.concat({token:token})
              await this.save()
            return token
    
        }
        catch(err)
        {
    console.log({err:"something wetn rong"})
        }
    }

const User=mongoose.model('USER',userschema)
module.exports=User

