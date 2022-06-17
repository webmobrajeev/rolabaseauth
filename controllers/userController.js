import userValidationSchema from '../helpers/joiValidatiaonHelper.js'
import User from '../models/userMoldel.js'
// import {signAccessToken} from '../helpers/JWTHeler.js'
import createError from 'http-errors'


const userRegister = async (req, res, next) => {
    try {
        const result = await userValidationSchema.validateAsync(req.body)
        const doesExist = await User.findOne({ email: result.email })
        if (doesExist) {
            throw createError.Conflict("user already exist")
        }
        const user = new User(result)
        const saveData = await user.save()
        // const token = await signAccessToken(saveData.id, saveData.role)
        // console.log(token)
        // res.json({ token })
        res.json({message:"user created successfully"})
    } catch (error) {
        next(error)

    }
}

const getUsers=async(req, res, next)=>{
    try {
        const getData = await User.find()
        res.json(getData)
        
    } catch (error) {
        throw createError.NotFound()
        
    }
}

export { userRegister, getUsers }