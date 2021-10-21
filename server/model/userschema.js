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
})
//hashing password
userschema.pre('save', async function(next) {
    console.log('just before saving');
    const rounds = 10;

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;
    next();
});


const User=mongoose.model('USER',userschema)
module.exports=User

