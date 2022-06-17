import express from 'express'
const loginRoute=express.Router()
import {loginUser} from '../controllers/loginController.js'

loginRoute.post('/login',loginUser)

loginRoute.get('/login',(req, res)=>{
    res.send('this is login route')
})
export default loginRoute