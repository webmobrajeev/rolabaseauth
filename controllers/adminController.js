import User from '../models/userMoldel.js'
import createError from 'http-errors'
const getAllUsers=async(req, res, next)=>{
    try {
        const id = req.payload.aud
        const user = await User.findOne({_id:id})
        if(!user) throw createError.Unauthorized()
        if(user.role==="ADMIN"){
            const users= await User.find();
            res.json(users)
            return
        }  
        else{
            res.json({mesaage:"unauthorized"})
            return
        }      
    } catch (error) {
        
    }

}

export {getAllUsers}