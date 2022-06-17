import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import createError from 'http-errors'
const userSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
     },
     password:{
        type:String,
        required:true
     },
     role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER"
     }
})

userSchema.pre('save',async function(next){{
    if(this.isNew){
        const salt = await bcrypt.genSalt(8)
        const hashPasword= await bcrypt.hash(this.password, salt)
        this.password=hashPasword
    }
}})
userSchema.methods.isValidPassword=async function(password){
    try {
        return await bcrypt.compare(password, this.password)        
    } catch (error) {
        throw createError.InternalServerError(error.message)        
    }
    
}

const User = mongoose.model('user', userSchema)
export default User

