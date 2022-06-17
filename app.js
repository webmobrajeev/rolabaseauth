import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import mainRouter from './routes/mainRouter.js'
import createError from 'http-errors'
app.use(express.json())
app.use(express.urlencoded({extended:false}))
import {db_connect }from './config/db.js' // db connection
db_connect(process.env.DB_URI,process.env.DB_NAME)


app.use(mainRouter) // main router for halding all routes

//page not found
app.use((req, res, next)=>{
    next(createError.NotFound())
})

//error handling 
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    .send({message:err.message})
})
export default app
