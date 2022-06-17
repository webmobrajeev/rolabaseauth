import Joi from 'joi'
const userValidationSchema = Joi.object({
    name:Joi.string().trim().required().min(3),
    email:Joi.string().email().trim().lowercase().required(),
    password:Joi.string().min(4).required(),
    role:Joi.string()
})

export default userValidationSchema