import express from 'express'
const userRouter= express.Router()
import {userRegister, getUsers} from '../controllers/userController.js'

userRouter.get('/users', getUsers)

userRouter.post('/register',userRegister)

userRouter.get('/user/:id', async(req, res, next)=>{
    res.send('this is user --get request by id')
})

userRouter.put('/user/:id', async(req, res, next)=>{
    res.send('this is user --put request')
})
userRouter.delete('/user/:id', async(req, res, next)=>{
    res.send('this is user --posy request')
})

export default userRouter
