import createHttpError from "http-errors"
import User from "../models/userMoldel.js"
import {signAccessToken} from '../helpers/JWTHeler.js'

const loginUser =async(req, res, next)=>{
    try {
        const {email, password} = req.body
        const user =await User.findOne({email})
        if (!user) throw createHttpError.Unauthorized('user name and password is not valid')
        const isValidPass =await user.isValidPassword(password)
        if(isValidPass){
            const token = await signAccessToken(user.id)
            res.status(200).json({token})
            return;
        }
        
    } catch (error) {
        throw error
        
    }
    res.send('loging route')
}
export {
    loginUser,
}