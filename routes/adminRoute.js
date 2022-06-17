import express from 'express'
const adminRouter= express.Router()
import {verifyAccessToken} from '../middlewares/authUsers.js'
import {getAllUsers} from '../controllers/adminController.js'
adminRouter.get('/admin', verifyAccessToken, getAllUsers)

export default adminRouter