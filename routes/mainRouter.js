import adminRouter from "./adminRoute.js";
import userRouter from "./usersRoute.js";
import loginRoute from './loginRoute.js'
import express from "express";
const mainRouter= express.Router()

mainRouter.use(adminRouter)
mainRouter.use(userRouter)
mainRouter.use(loginRoute)

export default mainRouter